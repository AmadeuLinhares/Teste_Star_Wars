import React from 'react';
import { Container, Image } from './styles';
import Foto1 from '../../assets/planetas.png';

interface CardInterface {
  imagem: string;
  active: boolean;
  callback: Function;
  id: string;
}

const Cards: React.FC<CardInterface> = ({ imagem, active, callback, id }) => {
  return (
    <Container onClick={() => callback(id)}>
      <Image image={imagem} ativo={active} />
    </Container>
  );
};

export default Cards;
