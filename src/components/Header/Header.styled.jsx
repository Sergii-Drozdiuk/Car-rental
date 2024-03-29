import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const HeaderWrapper = styled.header`
  padding: 12px 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4px;
  min-height: 3rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  max-width: 1184px;

  @media screen and (min-width: 767px) {
    justify-content: center;
    gap: 24px;
  }
  @media screen and (min-width: 1200px) {
    justify-content: end;
  }
`;

export const NavMenu = styled(NavLink)`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #f7f7fb;
  color: #121417;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  @media screen and (max-width: 425px) {
    padding: 14px 32px;
  }

  &.active {
    color: #fff;
    background: #3470ff;
  }

  &:hover {
    color: #fff;
    background: #3470ff;
  }
`;

export const HomeIcons = styled(HomeIcon)`
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const Drives = styled(DriveEtaIcon)`
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const Favorite = styled(FavoriteBorderIcon)`
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const Span = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
