import React, { ButtonHTMLAttributes } from 'react';
import { Container, Texto } from './styles';

interface ButtonParameters extends ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string;
  disabled: boolean;
}

const Button: React.FC<ButtonParameters> = ({ texto, disabled, ...rest }) => {
  console.log(disabled);
  return (
    <Container disabled={disabled} {...rest}>
      <Texto disabled>{texto}</Texto>
    </Container>
  );
};

export default Button;
