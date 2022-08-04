import { ThemeProvider } from 'styled-components'
import TodoList from './components/TodoList'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  )
}

export default App
