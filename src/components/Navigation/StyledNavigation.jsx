import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: yellow;
  }
`;
