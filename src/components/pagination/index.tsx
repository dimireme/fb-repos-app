import React, { useMemo } from 'react';

import { Container, Item, ArrowLeft, ArrowRight } from './styled';

const PAGE_GAP = 2; // сколько страниц слева и справа от текущей нужно показывать

type Props = {
  page: number;
  total: number;
  setPage: (page: number) => any;
};

const Pagination: React.FC<Props> = ({ page, total, setPage }) => {
  // Генерируем массив отображаемых страниц.
  // Количество страниц слева и справа от текущей высчитывается в зависимости от PAGE_GAP.
  const pages = useMemo(
    () =>
      Array.from({ length: total }, (v, k) => k).slice(
        Math.max(page - PAGE_GAP - 1, 0),
        Math.min(page + PAGE_GAP, total),
      ),
    [total, page],
  );

  const showLeftArrow = page > PAGE_GAP;
  const showRightArrow = total - page > PAGE_GAP;

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
      {showRightArrow ? (
        <Item key="lastPage" onClick={() => setPage(total)}>
          <ArrowRight />
        </Item>
      ) : null}
    </Container>
  );
};

export default Pagination;
