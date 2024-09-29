import { Button, Stack, Typography } from "@mui/material";
import AnogleLogoSVG from "../../assets/Anogle-Logo.svg";

function Header() {
  return (
    <Stack css={{ padding: "8px 0px 8px 60px" }}>
      <Stack direction="row" spacing={6}>
        <Stack css={{ justifyContent: "center" }}>
          <img
            src={AnogleLogoSVG}
            css={{
              width: "32px",
              height: "32px",
            }}
          />
        </Stack>

        <Stack spacing={2} direction="row">
          <Button>
            <Typography>암장 출석</Typography>
          </Button>
          <Button>
            <Typography>암장 출석</Typography>
          </Button>
          <Button>
            <Typography>암장 출석</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { Header };
