import {
  Container,
  ImageNavLik,
  LogoImg,
  Nav,
  NavLinksContainer,
} from './styles'
import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <Container>
      <ImageNavLik to="/">
        <LogoImg src={Logo} />
      </ImageNavLik>
      <NavLinksContainer>
        <Nav to="/">Characters</Nav>
        <Nav to="/planets">Planets</Nav>
        <Nav to="/starships">Starships</Nav>
      </NavLinksContainer>
    </Container>
  )
}
