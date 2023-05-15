import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.zinc800};

  width: 100%;
  height: 6.5rem;
  max-width: 70rem;
`

export const LogoImg = styled.img`
  width: 10rem;
`

export const ImageNavLik = styled(NavLink)`
  text-decoration: none;
`

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
`

export const Nav = styled(NavLink)`
  text-decoration: none;

  padding-bottom: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.gray100};
  font-size: 1.25rem;
  font-weight: 400;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &:hover {
    color: ${(props) => props.theme.primary};
    transition: color 0.5s;
  }

  &.active {
    border-bottom: 3px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
`
