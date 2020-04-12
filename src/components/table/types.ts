import { ReactNode, ReactElement } from 'react';

export type CellCustomRenderer<T> = (
  value: T[keyof T],
) => ReactNode | T[keyof T];

export interface IColumn<T> {
  label: string;
  key: keyof T;
  cell?: CellCustomRenderer<T>;
  width?: string;
}
