import React from 'react';
import Personagens from '../assets/personagens.png';
import Planetas from '../assets/planetas.png';
import Naves from '../assets/naves.png';

export const OptionsHome = [
  {
    titulo: 'Naves',
    id: '18e80389-db9d-4b81-af28-c599eeebcde7',
    image: Naves,
    active: false,
    url: 'starships',
  },
  {
    titulo: 'Personagens',
    id: 'a0ceebf9-11d1-4f3f-a128-9c6c665dc508',
    image: Personagens,
    active: false,
    url: 'people',
  },
  {
    titulo: 'Planetas',
    id: '44ca3fd1-2900-4e25-a3e8-6515096cc24f',
    image: Planetas,
    active: false,
    url: 'planets',
  },
];
