import styled from 'styled-components';
import {colors} from '../globalStyle';

export const TitleWrapper = styled.div`
  font-family: 'TargetExpand';
  color: ${colors.REACT_CYAN};
  font-size: 3vw;
  cursor: pointer;

  &:hover {
    color: ${colors.NEON_MAGENTA_DARKER};
  }
`;