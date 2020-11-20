import React, { useCallback, useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from '../../services/api';
import Container from '../../components/Container/Principal';
import Cards from '../../components/Details';
import { ContainerDetalhes, ContainerCards } from './styles';
import Button from '../../components/Buttons';
import { LoadingContext } from '../../context/loading';

interface ParametersInterface {
  id: string;
}

interface ElementsInterface {
  name: string;
}

const Detalhes: React.FC = () => {
  const { ativo, setIsLoading } = useContext(LoadingContext);
  const history = useHistory();
  const { id } = useParams<ParametersInterface>();
  const [elements, setElements] = useState({} as ElementsInterface[]);

  const loadInformations = useCallback(async () => {
    setIsLoading({
      active: true,
    });
    const { data } = await axios.get(`/${id}`);

    if (data.results?.length) {
      const formattedData = data.results.map((element: ElementsInterface) => ({
        name: element.name,
      }));

      setElements(formattedData);
    }

    setIsLoading({
      active: false,
    });
  }, [setIsLoading, id]);

  useEffect(() => {
    loadInformations();
  }, []);

  return (
    <Container>
      <ContainerDetalhes>
        <ContainerCards>
          {elements.length ? (
            elements.map(element => (
              <Cards key={element.name}>{element.name}</Cards>
            ))
          ) : (
            <div>
              <p>Sem infomacoes :(</p>
            </div>
          )}
        </ContainerCards>
        <Button
          texto="Voltar"
          disabled={false}
          onClick={() => history.push('/')}
        />
      </ContainerDetalhes>
    </Container>
  );
};

export default Detalhes;
