import React, { useState } from 'react';
import Pagination from './';

export default {
  title: 'Pagination',
};

export const defaultPagination = () => (
  <Pagination page={1} hasNextPage={false} setPage={() => null} />
);

const ControledPagination = () => {
  const [page, setPage] = useState(1);
  return <Pagination page={page} setPage={setPage} hasNextPage={true} />;
};

export const controledPagination = () => <ControledPagination />;
