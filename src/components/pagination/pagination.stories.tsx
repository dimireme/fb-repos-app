import React, { useState } from 'react';
import Pagination from './';

export default {
  title: 'Pagination',
};

export const defaultPagination = () => (
  <Pagination page={1} total={1} setPage={() => null} />
);

const ControledPagination = () => {
  const [page, setPage] = useState(1);
  return <Pagination page={page} setPage={setPage} total={10} />;
};

export const controledPagination = () => <ControledPagination />;
