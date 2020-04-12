import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  color: #212121;
  font-size: 14px;
  background: #fff;
  border-radius: 6px;
  border-collapse: collapse;
  table-layout: fixed;
`;
Table.displayName = 'Table';

export const HeaderRow = styled.tr`
  border-bottom: 1px solid #eee;
`;
HeaderRow.displayName = 'HeaderRow';

export const TR = styled.tr`
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #fafafa;
  }
`;
TR.displayName = 'TR';

export const TH = styled.th`
  padding: 16px 8px;
  text-align: left;
  white-space: pre-wrap;
  line-height: 20px;
  vertical-align: middle;
  &:first-child {
    padding-left: 16px;
  }
  &:last-child {
    padding-right: 16px;
  }
`;
TH.displayName = 'TH';

export const TD = styled.td`
  padding: 16px 8px;
  line-height: 1.4;
  vertical-align: top;
  word-break: break-word;

  &:last-child {
    padding-right: 16px;
  }
  &:first-child {
    padding-left: 16px;
  }
`;
TD.displayName = 'TD';
