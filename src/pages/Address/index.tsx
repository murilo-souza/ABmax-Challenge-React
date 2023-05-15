import { useTheme } from 'styled-components'
import {
  AddressContainer,
  Container,
  Header,
  HeaderTitle,
  SectionAddresses,
  SectionText,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { useUser } from '../../hooks/user'

export function Address() {
  const theme = useTheme()
  const { address } = useUser()

  return (
    <Container>
      {address.map((uniqueAddress) => (
        <>
          <Header>
            <MapPinLine size={30} color={theme.primary} />
            <HeaderTitle>Personal address</HeaderTitle>
          </Header>
          <AddressContainer>
            <SectionAddresses>
              <SectionText>
                Postal Code: {uniqueAddress.location.postcode}
              </SectionText>
            </SectionAddresses>
            <SectionAddresses className="country">
              <SectionText>
                Country: {uniqueAddress.location.country}
              </SectionText>
            </SectionAddresses>
            <SectionAddresses className="street">
              <SectionText>
                Street Name: {uniqueAddress.location.street.name}
              </SectionText>
            </SectionAddresses>
            <SectionAddresses>
              <SectionText>
                Street Number: {uniqueAddress.location.street.number}
              </SectionText>
            </SectionAddresses>
            <SectionAddresses>
              <SectionText>City: {uniqueAddress.location.city}</SectionText>
            </SectionAddresses>
            <SectionAddresses>
              <SectionText>State: {uniqueAddress.location.state}</SectionText>
            </SectionAddresses>
          </AddressContainer>
        </>
      ))}
    </Container>
  )
}
