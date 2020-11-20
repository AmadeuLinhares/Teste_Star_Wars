import React from 'react';

import {
  Container,
  Subcontainer,
  Principal,
  LogoContainer,
  Logo,
} from './styles';
import LogoFoto from '../../../assets/logo.png';
import LoadingPage from '../../Loading';

const EstruturaContainer: React.FC = ({ children }) => {
  return (
    <>
      <LoadingPage />
      <Container>
        <Subcontainer>
          <Principal>
            <LogoContainer>
              <Logo image={LogoFoto} />
            </LogoContainer>
            {children}
          </Principal>
        </Subcontainer>
      </Container>
    </>
  );
};

export default EstruturaContainer;
