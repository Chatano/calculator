import styled from 'styled-components';
import { buttonSize } from './Calculator';

export const Container = styled.button`
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  border-radius: 4px;
  background-color: #111;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #111125;
    color: #ff8000;
  }
`;
