import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 2rem;
  background-color: '#000000';

  display: grid;
  grid-template-columns: auto auto;

  justify-content: center;

  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`
