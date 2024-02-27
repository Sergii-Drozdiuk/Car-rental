import { NavMenu, HeaderWrapper, Container, Span, HomeIcons, Drives, Favorite } from './Header.styled';

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <NavMenu to="/">
          <Span>Home</Span>
          <HomeIcons />
        </NavMenu>
        <NavMenu to="/catalog">
          <Span>Catalog</Span>
          <Drives />
        </NavMenu>
        <NavMenu to="/favorites">
          <Span>Favorites</Span>
          <Favorite />
        </NavMenu>
      </Container>
    </HeaderWrapper>
  );
}
