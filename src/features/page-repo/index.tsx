import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { H1, PageWrap } from '../../components/primitives';
import Pagination from '../../components/pagination';
import Avatar from '../../components/avatar';
import Loader from '../../components/loader';
import Table from '../../components/table';
import BarChart from '../../components/bar-chart';
import Searcher from '../../components/searcher';

import { fetchRepoList, setPage } from './actions';
import { getPage, getTotal, getRepos, getLoading } from './selectors';
import { IOwner, IRepo } from './types';

const PageRepo = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const total = useSelector(getTotal);
  const data = useSelector(getRepos);
  const loading = useSelector(getLoading);

  const [search, setSearch] = useState('');

  const handleFetchRepos = useCallback(
    (page: number, search?: string) => {
      dispatch(fetchRepoList({ page, search }));
    },
    [dispatch],
  );

  useEffect(() => {
    handleFetchRepos(page);
  }, []); // eslint-disable-line

  const handleSearch = () => {
    dispatch(setPage(1));
    handleFetchRepos(1, search);
  };

  const handleChangePage = (page: number) => {
    dispatch(setPage(page));
    handleFetchRepos(page, search);
  };

  return (
    <PageWrap>
      <Loader loading={loading} />
      <H1>Facebook repos</H1>
      <Searcher value={search} onChange={setSearch} onSubmit={handleSearch} />
      <Table<IRepo>
        data={data}
        keyName="id"
        columns={[
          { key: 'id', label: '#', width: '110px' },
          { key: 'name', label: 'Название', width: '200px' },
          { key: 'description', label: 'Описание' },
          {
            key: 'open_issues_count',
            label: 'Открыто задач',
            width: '200px',
            cell: (val) => val,
          },
          {
            key: 'owner',
            label: 'Кампания',
            cell: (value: IOwner) => (
              <Avatar label={value.login} url={value.avatar_url} />
            ),
            width: '200px',
          },
        ]}
      />
      <Pagination page={page} setPage={handleChangePage} total={total} />

      <BarChart data={data} />
    </PageWrap>
  );
};

export default PageRepo;
