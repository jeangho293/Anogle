import { Button, Stack, Typography } from "@mui/material";

function SocialLoginButtonGroup() {
  return (
    <Stack
      direction="row"
      spacing="16px"
      css={{ justifyContent: "space-between" }}
    >
      <Button
        css={{
          width: "160px",
          backgroundColor: "inherit",
          border: "thin solid #000000",
        }}
      >
        <Typography css={{ color: "#000000" }}>Google</Typography>
      </Button>
      <Button css={{ width: "160px", backgroundColor: "#FFF500" }}>
        <Typography css={{ color: "#000000" }}>Kakao</Typography>
      </Button>
    </Stack>
  );
}

export { SocialLoginButtonGroup };
