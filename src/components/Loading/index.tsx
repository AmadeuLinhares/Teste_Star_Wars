import React, { useContext } from 'react';
import { Container, Load } from './styles';
import { LoadingContext } from '../../context/loading';

const Loading: React.FC = () => {
  const { ativo } = useContext(LoadingContext);

  return (
    <Container active={ativo}>
      <Load />
    </Container>
  );
};

export default Loading;
