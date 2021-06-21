import styled from "styled-components";
import { colors } from './../../../globalStyle';

export const HomeIconWrapper = styled.img`
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  pointer-events: none;
`;

export const Button = styled.button`
  background-color: ${colors.NEON_MAGENTA};
  cursor: pointer;
  transition: all 500ms ease-out 50ms;

  :hover {
    background-color: ${colors.REACT_CYAN};
  }
`;