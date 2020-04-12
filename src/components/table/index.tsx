import React from 'react';

import { IColumn } from './types';

import { Table, HeaderRow, TR, TH, TD } from './styled';

interface TableProps<T> {
  columns: IColumn<T>[];
  data: T[];
  keyName: keyof Required<T>;
  styles?: React.CSSProperties;
  className?: string;
}

export default function TableLyout<T>({
  columns,
  data = [],
  keyName,
  styles,
  className,
}: TableProps<T>) {
  return (
    <Table style={styles} className={className}>
      <thead>
        <HeaderRow>
          {columns.map((column) => (
            <TH
              key={String(column.key)}
              style={{ width: column.width ?? 'auto' }}
            >
              {column.label}
            </TH>
          ))}
        </HeaderRow>
      </thead>

      <tbody>
        {data.map((row) => (
          <Row key={String(row[keyName])} columns={columns} row={row} />
        ))}
      </tbody>
    </Table>
  );
}

interface RowProps<T> {
  columns: IColumn<T>[];
  row: T;
}

function Row<T>({ columns, row }: RowProps<T>) {
  return (
    <TR>
      {columns.map(({ key, cell }) => (
        <TD key={String(key)}>
          {typeof cell === 'function' ? cell(row[key]) : row[key]}
        </TD>
      ))}
    </TR>
  );
}
