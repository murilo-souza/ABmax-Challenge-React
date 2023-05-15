import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 2rem;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme.zinc700};

  padding: 1rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2rem;
`
export const HeaderTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`
export const AddressContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 0.75rem;
  row-gap: 1rem;

  .col-1 {
    grid-column: span 1;
  }

  .col-2 {
    grid-column: span 2;
  }

  .col-3 {
    grid-column: span 3;
  }

  @media (max-width: 768px) {
    .col-1 {
      grid-column: span 3;
    }

    .col-2 {
      grid-column: span 3;
    }

    .col-3 {
      grid-column: span 3;
    }
  }
`

export const SectionAddresses = styled.div`
  background-color: ${(props) => props.theme.zinc800};
  padding: 1rem;

  border-radius: 5px;
`

export const SectionText = styled.span`
  font-weight: 400;
`
