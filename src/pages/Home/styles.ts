import { ReactComponentElement, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import LogoPgn from '../../assets/logo.png';

interface LogoInterface extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

export const ContainerHome = styled.div`
  display: grid;
  row-gap: 100px;
  justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img.attrs<LogoInterface>(({ image, ...rest }) => ({
  src: image,
  ...rest,
}))<LogoInterface>`
  width: 300px;
  height: 105px;
`;

export const FilesContainer = styled.div`
  display: grid;
  row-gap: 30px;
`;
export const ButtonContainer = styled.div`
  display: grid;
`;
