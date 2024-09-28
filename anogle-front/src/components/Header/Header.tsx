import { Button, Divider, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <Stack>
      <Stack css={{ backgroundColor: "#FFFFFF" }}>
        <Stack direction="row" spacing={1}>
          <Button>여기까지는 로고 그려야지</Button>
          <Divider
            orientation="vertical"
            variant="middle"
            css={{ color: "red", height: "60px" }}
          />
          <Button css={{ backgroundColor: "red", color: "#000000" }}>
            암장 출석
          </Button>
          <Button css={{ backgroundColor: "red", color: "#000000" }}>
            암장 출석
          </Button>
          <Button css={{ backgroundColor: "red", color: "#000000" }}>
            암장 출석
          </Button>
        </Stack>
      </Stack>
      <Outlet />
    </Stack>
  );
}

export { Header };
