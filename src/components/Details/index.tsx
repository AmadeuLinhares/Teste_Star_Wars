import React from 'react';
import { Container, ContainerAvatar, ContainerInfos, Name } from './styles';
import Foto from '../../assets/personagens.png';

const Details: React.FC = ({ children }) => {
  return (
    <Container>
      <ContainerAvatar>
        <img src={Foto} alt="foto" />
      </ContainerAvatar>
      <ContainerInfos>
        <Name>
          <p>{children}</p>
        </Name>
      </ContainerInfos>
    </Container>
  );
};

export default Details;
