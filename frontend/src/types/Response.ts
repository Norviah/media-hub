export type UknownError = {
  success: false;
  error: string;
  code: number;
};

export type Success<T> = {
  success: true;
  data: T;
  code: number;
};

export type Failure = {
  success: false;
  code: number;
  message: string;
};

export type Response<T> = Success<T> | Failure | UknownError;
