import styled from 'styled-components';

export const ContainerDetalhes = styled.div`
  display: grid;
  row-gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const ContainerCards = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  row-gap: 30px;
  overflow: scroll;
  height: 80%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
