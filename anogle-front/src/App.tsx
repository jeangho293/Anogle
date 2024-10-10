import { ThemeProvider } from "@mui/material";
import { AppRouter } from "./routes";
import { AuthProvider, theme } from "./libs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
