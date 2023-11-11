export interface IToastContextValue {
  open: (message: string) => void;
  close: (id: number) => void;
}
