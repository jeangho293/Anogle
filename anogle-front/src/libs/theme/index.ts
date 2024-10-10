import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#855AFF",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Madimi One",
  },
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: "0 8px",
        },
        input: {
          padding: "8px 8px 8px 0",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "4px",
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "inherit",
          padding: "8px 12px",
          boxShadow: "none",
        },
      },
    },
  },
});
