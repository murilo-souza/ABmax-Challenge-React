import {
  CardTitle,
  Container,
  InfoGroupContainer,
  InfoTextValue,
  InfoTitle,
  InfoUniqueContainer,
} from './styles'

export function CharacterCard() {
  return (
    <Container>
      <InfoUniqueContainer>
        <CardTitle>Luke Skywalker</CardTitle>
      </InfoUniqueContainer>

      <InfoGroupContainer>
        <InfoUniqueContainer>
          <InfoTitle>Gender:</InfoTitle>
          <InfoTextValue>Male</InfoTextValue>
        </InfoUniqueContainer>
        <InfoUniqueContainer>
          <InfoTitle>Height:</InfoTitle>
          <InfoTextValue>1.72 m</InfoTextValue>
        </InfoUniqueContainer>
        <InfoUniqueContainer>
          <InfoTitle>Weight:</InfoTitle>
          <InfoTextValue>77 kg</InfoTextValue>
        </InfoUniqueContainer>
      </InfoGroupContainer>

      <InfoGroupContainer>
        <InfoUniqueContainer>
          <InfoTitle>Hair color:</InfoTitle>
          <InfoTextValue>Blond</InfoTextValue>
        </InfoUniqueContainer>
        <InfoUniqueContainer>
          <InfoTitle>Skin color:</InfoTitle>
          <InfoTextValue>Fair</InfoTextValue>
        </InfoUniqueContainer>
        <InfoUniqueContainer>
          <InfoTitle>Eye color:</InfoTitle>
          <InfoTextValue>Blue</InfoTextValue>
        </InfoUniqueContainer>
      </InfoGroupContainer>
    </Container>
  )
}
