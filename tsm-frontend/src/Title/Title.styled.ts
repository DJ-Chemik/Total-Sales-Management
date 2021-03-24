import styled from 'styled-components';
import {colors} from '../globalStyle';

export const TitleWrapper = styled.div`
  font-family: 'TargetExpand';
  color: ${colors.REACT_CYAN};
  font-size: 3vw;
  margin-bottom: 1rem;
  cursor: context-menu;
  user-select: none;

  &:hover {
    color: ${colors.NEON_MAGENTA_DARKER_2};
  }

  @media (max-height: 500px) {
    font-size: 5vmin;
    margin-bottom: 0.5rem;
  }
`;