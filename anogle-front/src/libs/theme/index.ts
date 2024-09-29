import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          opacity: 0.85,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
});
