import { HttpMethod } from './types';

const EXPIRATION_TIME_IN_SECONDS = 3_600;

export type ApiCallFunction<R, B> =
  | (() => Promise<R>)
  | ((args?: B) => Promise<R>);

type ApiRequestParams<T> = {
  path: string;
  method: HttpMethod;
  body?: T;
};

export const apiRequest = async <R, B = undefined>({
  path,
  method,
  body,
}: ApiRequestParams<B>): Promise<R> => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const response = await fetch(`${VITE_API_BASE_URL}/${path}`, {
    method,
    body: JSON.stringify(body),
    headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }),
  });
  return response.json() as Promise<R>;
};

const getSelector = <T>(fnName: string, bodyId: T | undefined): string => {
  if (bodyId) {
    return fnName + JSON.stringify(bodyId);
  }
  return fnName;
};

const getExpirationDate = (): Date => {
  const expirationDate = new Date();
  const expirationTime =
    expirationDate.getSeconds() + EXPIRATION_TIME_IN_SECONDS;
  expirationDate.setSeconds(expirationTime);
  return expirationDate;
};

export const memoRequest = <R, B = undefined>(
  apiCall: ApiCallFunction<R, B>
): ApiCallFunction<R, B> => {
  const cache = new Map<string, { data: R; expiration: Date }>();

  return async body => {
    const selector = getSelector(apiCall.name, body);
    const now = new Date();
    const expirationDate = cache.get(selector)?.expiration;

    if (cache.has(selector) && expirationDate) {
      if (expirationDate >= now) {
        return cache.get(selector)?.data as R;
      }
    }

    const data = await apiCall(body);
    cache.set(selector, { data, expiration: getExpirationDate() });
    return data;
  };
};
