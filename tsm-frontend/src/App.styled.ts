import styled from 'styled-components';
import { colors } from './globalStyle';

export const AppContainer = styled.div`
  text-align: center;
  background-color: ${colors.BLACK};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;