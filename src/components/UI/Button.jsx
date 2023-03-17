import React from 'react';
import { ButtonText, ButtonWrapper } from './Button.styled';

export const Button = ({ changeUser, id, status }) => {
  return (
    <ButtonWrapper status={status} onClick={() => changeUser(id)}>
      <ButtonText>{status}</ButtonText>
    </ButtonWrapper>
  );
};
