import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { H1, PageWrap } from '../../components/primitives';
import Pagination from '../../components/pagination';
import Avatar from '../../components/avatar';
import Loader from '../../components/loader';
import Table from '../../components/table';
import Searcher from '../../components/searcher';
import { CellCustomRenderer } from '../../components/table/types';

import { fetchRepoList, setPage } from './actions';
import { getPage, getTotal, getRepos, getLoading } from './selectors';
import { IOwner, IRepo } from './types';

const PageRepo = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const total = useSelector(getTotal);
  const data = useSelector(getRepos);
  const loading = useSelector(getLoading);

  const handleFetchRepos = useCallback(
    (page: number, search?: string) => {
      dispatch(fetchRepoList({ page, search }));
    },
    [dispatch],
  );

  useEffect(() => {
    handleFetchRepos(page);
  }, [dispatch, page, handleFetchRepos]);

  return (
    <PageWrap>
      <Loader loading={loading} />
      <H1>Facebook repos</H1>
      <Searcher onSubmit={(search) => handleFetchRepos(0, search)} />
      <Table<IRepo>
        data={data}
        keyName="id"
        columns={[
          { key: 'id' as keyof IRepo, label: '#', width: '110px' },
          { key: 'name' as keyof IRepo, label: 'Название', width: '200px' },
          { key: 'description' as keyof IRepo, label: 'Описание' },
          {
            key: 'open_issues_count',
            label: 'Открыто задач',
            width: '200px',
          },
          {
            key: 'owner' as keyof IRepo,
            label: 'Кампания',
            cell: ((value: IOwner) => (
              <Avatar label={value.login} url={value.avatar_url} />
            )) as CellCustomRenderer<IRepo>,
            width: '200px',
          },
        ]}
      />
      <Pagination
        page={page}
        setPage={(p) => dispatch(setPage(p))}
        total={total}
      />
    </PageWrap>
  );
};

export default PageRepo;
