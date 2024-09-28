import { ThemeProvider } from "@emotion/react";
import { AppRouter } from "./routes/routes";
import { theme } from "./libs/theme";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "./libs/auth";
import { UserModel } from "./models";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider user={new UserModel()}>
          <AppRouter />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
