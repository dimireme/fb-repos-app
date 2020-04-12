import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { H1, PageWrap } from '../../components/primitives';
import { fetchRepoList } from './actions';

const ORG = 'facebook';

const PageRepo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepoList(ORG));
  }, [dispatch]);

  return (
    <PageWrap>
      <H1>Facebook repos</H1>
    </PageWrap>
  );
};

export default PageRepo;
