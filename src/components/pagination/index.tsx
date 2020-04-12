import React, { useMemo } from 'react';
import styled from 'styled-components';

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
    <Wrapper>
      {showLeftArrow ? (
        <Item key="firstPage" onClick={() => setPage(1)}>
          <IconLeft />
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
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  text-align: center;
  margin: 32px;
`;

type ItemProps = {
  isActive?: boolean;
};

const Item = styled.span<ItemProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: ${(props) => (props.isActive ? '1px solid #5e35b1' : 'none')};
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  line-height: 40px;
  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    color: #5e35b1;
    path {
      fill: #5e35b1;
    }
  }
`;

const IconLeft = styled.div`
  width: 10px;
  height: 10px;
  border-top: 2px solid #5e35b1;
  border-left: 2px solid #5e35b1;
  transform: rotate(-45deg);
`;
