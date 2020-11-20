import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 60px;
  background: #d1a83b;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.5;
  padding: 0 20px;
  &:hover {
    transition: 0.5;
    background-color: rgba(209, 168, 59, 0.8);
    border: solid 1px white;
  }
`;
export const ContainerAvatar = styled.div`
  width: 45px;
  height: 45px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 100%;
  }
`;
export const ContainerInfos = styled.div`
  display: grid;
`;
export const Name = styled.div`
  p {
    /* color: #dddeda; */
    color: #020004;
    font-weight: bold;
  }
`;
