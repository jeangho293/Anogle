import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AnogleLogoSVG from "../../assets/anogle_logo.svg?react";
import EmailSVG from "../../assets/mdi_email.svg?react";
import LockSVG from "../../assets/mdi_lock.svg?react";
import EyeOffSVG from "../../assets/mdi_eye-off.svg?react";
import EyeSVG from "../../assets/mdi_eye.svg?react";

function SignInScreen() {
  const [isShow, setIsShow] = useState(false);

  return (
    <Stack
      css={{
        width: "100%",
        maxWidth: "360px",
        padding: "80px 60px 144px 60px",
        alignItems: "center",
      }}
    >
      <AnogleLogoSVG />

      <Typography css={{ fontSize: "24px", margin: "40px 0" }}>
        Sign in your account
      </Typography>

      <Stack spacing="16px" css={{ width: "100%" }}>
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailSVG />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          type={isShow ? "text" : "password"}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockSVG />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsShow(!isShow)}>
                    {isShow ? <EyeSVG /> : <EyeOffSVG />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Stack css={{ alignItems: "center" }}>
          <Button css={{ width: "160px", backgroundColor: "#855AFF" }}>
            <Typography css={{ color: "#FFFFFF" }}>Sign in</Typography>
          </Button>
        </Stack>
      </Stack>

      <Divider
        css={{
          width: "100%",
          margin: "24px",
          "&::before, &::after": {
            borderColor: "#000000",
          },
        }}
      >
        or
      </Divider>

      <Stack
        direction="row"
        spacing="16px"
        css={{ justifyContent: "space-between" }}
      >
        <Button css={{ width: "160px", border: "thin solid #000000" }}>
          <Typography css={{ color: "#000000" }}>Google</Typography>
        </Button>
        <Button css={{ width: "160px", backgroundColor: "#FFF500" }}>
          <Typography css={{ color: "#000000" }}>Kakao</Typography>
        </Button>
      </Stack>

      <Typography
        css={{
          fontSize: "16px",
          margin: "24px 0 4px 0",
          color: "#B0B0B0",
          textDecoration: "underline",
        }}
      >
        forget your password?
      </Typography>
      <Typography css={{ fontSize: "16px" }}>
        need to{" "}
        <a css={{ color: "#69AFEF", textDecoration: "underline" }}>sign up!</a>
      </Typography>
    </Stack>
  );
}

export { SignInScreen };
