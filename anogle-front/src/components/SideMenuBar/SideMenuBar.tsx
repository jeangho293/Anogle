import { Stack, Button, Typography } from "@mui/material";
import SimpleAnogleLogoSVG from "../../assets/simple-logo.svg";
import HomeSVG from "../../assets/mdi_home.svg";

function SideMenuBar() {
  return (
    <Stack
      css={{ height: "100vh", backgroundColor: "#855AFF", padding: "32px" }}
    >
      <img src={SimpleAnogleLogoSVG} css={{ width: "60px", height: "45px" }} />

      <Stack spacing="16px" css={{ marginTop: "48px" }}>
        <Button
          startIcon={
            <img src={HomeSVG} css={{ width: "24px", height: "24px" }} />
          }
          css={{
            padding: "8px 12px",
            justifyContent: "flex-start",
            backgroundColor: "inherit",
            "&:hover": {
              backgroundColor: "#7C2ACD",
            },
          }}
        >
          <Typography css={{ color: "#FFFFFF", fontSize: "16px" }}>
            Home
          </Typography>
        </Button>
        <Button
          css={{
            justifyContent: "flex-start",
            backgroundColor: "inherit",
            "&:hover": {
              backgroundColor: "#7C2ACD",
            },
          }}
        >
          <Typography css={{ color: "#FFFFFF", fontSize: "16px" }}>
            schedule
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export { SideMenuBar };
