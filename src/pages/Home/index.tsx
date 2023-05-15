import { CharacterCard } from '../../components/CharacterCard'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </Container>
  )
}
