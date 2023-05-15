import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes/default'
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './hooks/user'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
