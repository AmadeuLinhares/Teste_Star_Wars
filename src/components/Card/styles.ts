import styled, { css } from 'styled-components';
import { ReactComponentElement, ImgHTMLAttributes } from 'react';
import Foto from '../../assets/naves.png';

interface FotoElement extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
  ativo: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 190px;
  border-radius: 6px;
`;

export const Image = styled.img.attrs<FotoElement>(({ image, ...rest }) => ({
  src: image,
  ...rest,
}))<FotoElement>`
  width: 300px;
  height: 190px;
  opacity: 0.5;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.5;
  border: none;
  &:hover {
    opacity: 1;
    transition: 0.5;
    border: solid 2px #d1a83b;
  }

  ${props =>
    props.ativo &&
    css`
      opacity: 1;
      border: solid 2px #d1a83b;
    `}
`;
