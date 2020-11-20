import styled, { css } from 'styled-components';

import Loading from '../../assets/loading.gif';

interface ContainerInterface {
  active: boolean;
}
export const Container = styled.div<ContainerInterface>`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
  background-color: black;

  ${props =>
    !props.active
      ? css`
          display: none;
          visibility: hidden;
        `
      : css`
          display: flex;
        `}
`;
export const Load = styled.div`
  background-color: black;
  width: 400px;
  height: 400px;
  background-image: url(${Loading});
  background-repeat: no-repeat;
  background-size: 400px;
  background-position: center;
`;
