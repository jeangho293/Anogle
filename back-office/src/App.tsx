import { theme } from '@libs';
import { ThemeProvider } from '@mui/material';
import { AppRouter } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;