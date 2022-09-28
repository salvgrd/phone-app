import { HttpMethod } from './types';

const EXPIRATION_TIME_IN_SECONDS = 3_600;

type ApiRequestParams<T> = {
  path: string;
  method: HttpMethod;
  body?: T;
};

export const apiRequest = async <
  R,
  B extends BodyInit | null | undefined = undefined
>({
  path,
  method,
  body,
}: ApiRequestParams<B>): Promise<R> => {
  const { VITE_API_BASE_URL } = import.meta.env;
  const response = await fetch(`${VITE_API_BASE_URL}/${path}`, {
    method,
    body,
  });
  return response.json() as Promise<R>;
};

const getExpirationDate = (): Date => {
  const expirationDate = new Date();
  const expirationTime =
    expirationDate.getSeconds() + EXPIRATION_TIME_IN_SECONDS;
  expirationDate.setSeconds(expirationTime);
  return expirationDate;
};

export const memoRequest = <R, B = undefined>(
  apiCall: (body?: B) => Promise<R>
): ((body?: B) => Promise<R>) => {
  const cache = new Map<string, { data: R; expiration: Date }>();

  return async body => {
    const selector = apiCall.name;
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
