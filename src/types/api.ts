export type IBackendError = {
  status: number;
  data: { [key: string]: unknown };
};
