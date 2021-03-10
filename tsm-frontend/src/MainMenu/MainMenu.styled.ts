import styled from 'styled-components';
import { colors } from './../globalStyle';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuRow = styled.div`
  display: flex;
`;

export const  ButtonWrapper = styled.div`

`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32vw;
  height: 40vh;
  margin: 0.5rem;
  background-color: ${colors.NEON_MAGENTA};
  cursor: pointer;
`;

export const IconWrapper = styled.img`
  padding: 3rem;
  width: 25vmin;
  height: 20vmin;
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
  margin-bottom: 5vh;
  font-weight: 700;
`;