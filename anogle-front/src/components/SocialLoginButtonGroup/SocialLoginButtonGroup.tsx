import { Button, Stack, Typography } from "@mui/material";
import KaKaoTalkSVG from "../../assets/kakao-talk.svg?react";
import GoogleSVG from "../../assets/google.svg?react";

const googleClientID = import.meta.env.VITE_GOOGLE_REST_API_KEY;
const googleRedirectURI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const kakaoClientID = import.meta.env.VITE_KAKAO_REST_API_KET;
const kakaoRedirectURI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

function SocialLoginButtonGroup() {
  return (
    <Stack
      direction="row"
      spacing="16px"
      css={{ justifyContent: "space-between" }}
    >
      <Button
        href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientID}&response_type=code&scope=openid email&redirect_uri=${googleRedirectURI}`}
        css={{
          width: "160px",
          backgroundColor: "inherit",
          border: "thin solid #000000",
        }}
        startIcon={<GoogleSVG />}
      >
        <Typography css={{ color: "#000000" }}>Google</Typography>
      </Button>
      <Button
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientID}&redirect_uri=${kakaoRedirectURI}&response_type=code`}
        css={{ width: "160px", backgroundColor: "#FFF500" }}
        startIcon={<KaKaoTalkSVG />}
      >
        <Typography css={{ color: "#000000" }}>Kakao</Typography>
      </Button>
    </Stack>
  );
}

export { SocialLoginButtonGroup };
