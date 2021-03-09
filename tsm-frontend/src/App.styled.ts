import styled from 'styled-components';
import { colors } from './globalStyle';

export const AppContainer = styled.div`
  text-align: center;
  background-color: ${colors.DARK};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuRow = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin: 0.5rem;
  cursor: pointer;
`;

export const IconWrapper = styled.img`
  padding: 3rem;
  height: 25vmin;
  pointer-events: none;
  animation: IconSpinAnimation infinite 5s linear;

  @keyframes IconSpinAnimation {
    from {
      /* transform: rotate(0deg); */
    }
    to {
      /* transform: rotate(360deg); */
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 1rem;
  font-weight: 700;
`;