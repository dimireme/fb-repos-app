import { ReactNode } from 'react';

type CellCustomRenderer<T> = (value: T[keyof T]) => ReactNode | T[keyof T];

export interface IColumn<T> {
  label: string;
  key: keyof Required<T>;
  cell?: CellCustomRenderer<T>;
  width?: number;
}
