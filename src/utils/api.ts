const API_ROOT = 'https://api.github.com';

export const getApiUrl = (method: string): string => {
  return API_ROOT + method;
};

export const getHeaders = () => {
  const requestHeaders: HeadersInit = new Headers();

  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('Accept', 'application/json');

  return requestHeaders;
};
