import { Button, ButtonProps, Stack, Typography } from "@mui/material";
import SimpleLogoSVG from "../../assets/simple-logo.svg?react";
import DownArrowSVG from "../../assets/mdi_menu-down.svg?react";
import { useUser } from "../../libs";

function MenuButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button
      css={{
        height: "32px",
        backgroundColor: "inherit",
        color: "#000000",
        "&:hover": {
          backgroundColor: "rgba(133, 90, 255, 0.15)",
        },
      }}
    >
      {children}
    </Button>
  );
}

function Header() {
  const [user] = useUser();

  return (
    <Stack
      direction="row"
      position="sticky"
      css={{
        top: 0,
        height: "48px",
        zIndex: 1,
        backgroundColor: "#FFFFFF",
        padding: "0px 16px 0px 96px",
        borderBottom: "1px solid rgba(133, 90, 255, 0.20)",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack spacing="24px" direction="row">
        <SimpleLogoSVG />
        <Stack spacing="4px" direction="row">
          <MenuButton>Dashboard</MenuButton>
          <MenuButton>Schedule</MenuButton>
        </Stack>
      </Stack>
      <Stack direction="row" css={{ alignItems: "center" }}>
        {/* TODO: 아바타 아이콘이 있으면 좋겠다. */}
        <Typography css={{ width: "48px" }}>{user.username}</Typography>
        <DownArrowSVG />
      </Stack>
    </Stack>
  );
}

export { Header };
