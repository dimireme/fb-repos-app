import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  url: string;
};

const Avatar: React.FC<Props> = ({ label, url }) => {
  return (
    <Container>
      <img src={url} alt={label}></img> {label}
    </Container>
  );
};

export default Avatar;

const Container = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    min-width: 30px;
    margin-right: 10px;
  }
`;
