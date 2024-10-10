import { ThemeProvider } from "@mui/material";
import { AppRouter } from "./routes";
import { theme } from "./libs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
