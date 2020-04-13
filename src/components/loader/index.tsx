import React from 'react';
import { Container, Circle } from './styled';

type LoaderProps = {
  loading: boolean;
};

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return loading ? (
    <Container>
      <Circle />
    </Container>
  ) : null;
};

export default Loader;
