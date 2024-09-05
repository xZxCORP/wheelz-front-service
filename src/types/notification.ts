export type Snack = {
  type?: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  duration?: number;
};
