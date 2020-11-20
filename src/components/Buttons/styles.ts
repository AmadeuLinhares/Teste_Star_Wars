import styled, { css } from 'styled-components';

interface TextInterface {
  disabled?: boolean;
}

export const Container = styled.button`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  border-radius: 6px;
  width: 100%;

  ${props =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: no-drop;
          background-color: #dddeda;
        `
      : css`
          background-color: #d1a83b;
          opacity: 1;
        `}
`;

export const Texto = styled.p<TextInterface>`
  font-size: 16px;

  ${props =>
    props.disabled
      ? css`
          color: #fff;
        `
      : css`
          color: #dddeda;
        `}
`;
