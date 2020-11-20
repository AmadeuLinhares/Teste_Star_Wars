import { ReactComponentElement, ImgHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface LogoInterface extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 360px auto;
  grid-template-rows: auto;
  background-color: #020004;
  height: 100%;
  min-height: 100vh;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto 1024px auto;
  }

  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto 1440px auto;
  }
`;

export const Subcontainer = styled.div`
  grid-area: 1/2/2/3;
  display: grid;
  grid-template-columns: auto 330px auto;
  grid-template-rows: 20px auto 20px;

  @media only screen and (min-width: 1024px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: auto 1024px auto;
    grid-template-rows: 20px auto 20px;
  }

  @media only screen and (min-width: 1440px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: auto 1200px auto;
    grid-template-rows: 20px auto 20px;
  }
`;
export const Principal = styled.div`
  grid-area: 2/2/3/3;

  @media only screen and (min-width: 1024px) {
    grid-area: 2/2/3/3;
  }

  @media only screen and (min-width: 1440px) {
    grid-area: 2/2/3/3;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;

export const Logo = styled.img.attrs<LogoInterface>(({ image, ...rest }) => ({
  src: image,
  ...rest,
}))<LogoInterface>`
  width: 300px;
  height: 105px;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
