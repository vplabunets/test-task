import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  width: 196px;
  height: 50px;
  background-color: ${p =>
    p.status === 'follow' ? 'rgba(235, 216, 255, 1)' : 'rgba(92, 211, 168, 1)'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const ButtonText = styled.p`
  /* vertical-align: middle; */
`;
