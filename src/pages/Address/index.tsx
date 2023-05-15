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
            <SectionAddresses className="col-1">
              <SectionText>
                Postal Code: {uniqueAddress.location.postcode}
              </SectionText>
            </SectionAddresses>

            <SectionAddresses className="col-2">
              <SectionText>
                Country: {uniqueAddress.location.country}
              </SectionText>
            </SectionAddresses>

            <SectionAddresses className="col-3">
              <SectionText>
                Street Name: {uniqueAddress.location.street.name}
              </SectionText>
            </SectionAddresses>

            <SectionAddresses className="col-1">
              <SectionText>
                Number: {uniqueAddress.location.street.number}
              </SectionText>
            </SectionAddresses>

            <SectionAddresses className="col-1">
              <SectionText>City: {uniqueAddress.location.city}</SectionText>
            </SectionAddresses>

            <SectionAddresses className="col-1">
              <SectionText>State: {uniqueAddress.location.state}</SectionText>
            </SectionAddresses>
          </AddressContainer>
        </>
      ))}
    </Container>
  )
}
