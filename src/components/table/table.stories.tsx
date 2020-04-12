import React from 'react';
import Table from './';

export default {
  title: 'Table',
};

type IMeta = { job: string };

type IData = {
  userId: number;
  name: string;
  surname: string;
  meta: IMeta;
};

const data: IData[] = [
  {
    userId: 55,
    name: 'Peter',
    surname: 'McKinnon',
    meta: { job: 'google' },
  },
  {
    userId: 77,
    name: 'Andrew',
    surname: 'Huang',
    meta: { job: 'amazon' },
  },
  {
    userId: 99,
    name: 'Rob',
    surname: 'Scallon',
    meta: { job: 'yahoo' },
  },
];

export const withData = () => (
  <Table<IData>
    keyName="userId"
    columns={[
      { label: 'Имя', key: 'name' },
      { label: 'Фамилия', key: 'surname' },
      {
        label: 'Место работы',
        key: 'meta',
        cell: (value) => (value as IMeta).job,
      },
    ]}
    data={data}
  />
);
