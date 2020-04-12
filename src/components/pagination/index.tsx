import React, { useMemo } from 'react';

import { Container, Item, ArrowLeft } from './styled';

const PAGE_GAP_LEFT = 2; // сколько страниц слева от текущей нужно показывать

type Props = {
  page: number;
  hasNextPage: boolean;
  setPage: (page: number) => any;
};

const Pagination: React.FC<Props> = ({ page, hasNextPage, setPage }) => {
  // Генерируем массив отображаемых страниц.
  // Наличие страинцы справа зависит от hasNextPage.
  // Количество страниц слева от текущей высчитывается в зависимости от PAGE_GAP_LEFT.
  const pages = useMemo(
    () =>
      Array.from({ length: page + Number(hasNextPage) }, (v, k) => k).slice(
        Math.max(page - PAGE_GAP_LEFT - 1, 0),
      ),
    [hasNextPage, page],
  );

  const showLeftArrow = page > PAGE_GAP_LEFT;

  return (
    <Container>
      {showLeftArrow ? (
        <Item key="firstPage" onClick={() => setPage(1)}>
          <ArrowLeft />
        </Item>
      ) : null}
      {pages.map((item) => (
        <Item
          key={item}
          onClick={() => setPage(item + 1)}
          isActive={page === item + 1}
        >
          {item + 1}
        </Item>
      ))}
    </Container>
  );
};

export default Pagination;
