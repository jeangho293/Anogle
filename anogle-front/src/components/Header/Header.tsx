import { Button, Stack } from "@mui/material";
import Anogle from "../../assets/anolge.jpg";

function Header() {
  return (
    <Stack css={{ padding: "8px 0px 8px 60px", backgroundColor: "#FFFFFF" }}>
      <Stack direction="row" spacing={6}>
        <Stack css={{ justifyContent: "center" }}>
          <img
            src={Anogle}
            css={{
              width: "48px",
              height: "48px",
            }}
          />
        </Stack>

        <Stack spacing={2} direction="row">
          <Button css={{ color: "#000000" }}>암장 출석</Button>
          <Button css={{ color: "#000000" }}>암장 출석</Button>
          <Button css={{ color: "#000000" }}>암장 출석</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { Header };
