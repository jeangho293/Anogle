import { Stack, Button, Typography } from "@mui/material";
import SimpleAnogleLogoSVG from "../../assets/simple-logo.svg?react";
import HomeSVG from "../../assets/mdi_home.svg?react";
import CalendarSVG from "../../assets/mdi_calendar.svg?react";
import { ReactNode } from "react";

function MenuButton(props: {
  children: string;
  IconSVG: ReactNode;
  onClick?: () => void;
}) {
  const { children, IconSVG, onClick } = props;

  return (
    <Button
      startIcon={IconSVG}
      onClick={onClick}
      css={{
        justifyContent: "flex-start",
        backgroundColor: "inherit",
        "&:hover": {
          backgroundColor: "#7C2ACD",
        },
      }}
    >
      <Typography css={{ color: "#FFFFFF", fontSize: "20px" }}>
        {children}
      </Typography>
    </Button>
  );
}

function SideMenuBar() {
  return (
    <Stack
      css={{ height: "100vh", backgroundColor: "#855AFF", padding: "32px" }}
    >
      <SimpleAnogleLogoSVG />

      <Stack spacing="8px" css={{ marginTop: "48px" }}>
        <MenuButton IconSVG={<HomeSVG />}>Home</MenuButton>
        <MenuButton IconSVG={<CalendarSVG />}>Schedule</MenuButton>
      </Stack>
    </Stack>
  );
}

export { SideMenuBar };
