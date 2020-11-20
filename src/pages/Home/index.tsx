import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container/Principal';
import Button from '../../components/Buttons';
import {
  ContainerHome,
  LogoContainer,
  Logo,
  FilesContainer,
  ButtonContainer,
} from './styles';

import Card from '../../components/Card';
import PlanetasWallpaper from '../../assets/planetas.png';
import PersonagensWallpaper from '../../assets/personagens.png';
import NavesWallpaper from '../../assets/naves.png';
import LogoFoto from '../../assets/logo.png';
import { OptionsHome } from '../../util/index';
import Details from '../../components/Details';
import LoadingPage from '../../components/Loading';

interface OptionsInterface {
  image: string;
  id: string;
  titulo: string;
  active: boolean;
  url: string;
}

const Home: React.FC = () => {
  const history = useHistory();
  const [options, setOptions] = useState({} as OptionsInterface[]);
  const [activeButton, setActiveButton] = useState(true);
  const [choicenOption, setChoicenOption] = useState({} as OptionsInterface);
  useEffect(() => {
    setOptions(OptionsHome);
  }, []);

  function selecionarItem(id: string) {
    const listFilter = options.map(element =>
      id === element.id
        ? {
            ...element,
            active: true,
          }
        : {
            ...element,
            active: false,
          },
    );

    const verifyFilter = listFilter.filter(element => element.active === true);

    console.log(verifyFilter);

    if (verifyFilter.length > 0) {
      setChoicenOption(verifyFilter[0]);
      setActiveButton(false);
    } else {
      setActiveButton(true);
    }

    setOptions(listFilter);
  }

  function selectOptions() {
    history.push(`/Detalhes/${choicenOption.url}`);
  }

  return (
    <Container>
      <ContainerHome>
        <FilesContainer>
          {!!options.length &&
            options.map(element => (
              <Card
                key={element.id}
                id={element.id}
                imagem={element.image}
                active={element.active}
                callback={selecionarItem}
              />
            ))}
        </FilesContainer>
        <ButtonContainer>
          <Button
            texto="Selecionar"
            disabled={activeButton}
            onClick={() => selectOptions()}
          />
        </ButtonContainer>
      </ContainerHome>
    </Container>
  );
};

export default Home;
