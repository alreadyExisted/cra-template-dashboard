import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import { Pages } from '@app/pages'
import { store } from '@app/state'
import { theme } from '@app/theme'

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Pages />
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  )
}
