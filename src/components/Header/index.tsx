import {
  Container,
  ImageNavLik,
  LogoImg,
  Nav,
  NavLinksContainer,
} from './styles'
import Logo from '../../assets/banner.png'

export function Header() {
  return (
    <Container>
      <ImageNavLik to="/">
        <LogoImg src={Logo} />
      </ImageNavLik>
      <NavLinksContainer>
        <Nav to="/">Home</Nav>
        <Nav to="/address">Address</Nav>
      </NavLinksContainer>
    </Container>
  )
}
