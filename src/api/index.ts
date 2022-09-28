import { HttpMethod } from './types';

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
