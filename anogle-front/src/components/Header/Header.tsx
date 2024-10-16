import { Button, Stack, Typography, Divider, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import SimpleLogoSVG from "../../assets/simple-logo.svg?react";
import { useUser } from "../../libs";
import { ReactNode } from "react";

import { ProfileButton } from "../ProfileButton";

function MenuButton(props: { children: ReactNode; to: string }) {
  // props destructure
  const { children, to } = props;

  // hooks
  const navigator = useNavigate();
  const { pathname } = useLocation();

  // calculate values
  const matched = to === pathname;

  return (
    <Button
      onClick={() => navigator(to)}
      css={{
        height: "32px",
        backgroundColor: "inherit",
        color: "#000000",
        "&:hover": {
          backgroundColor: "rgba(133, 90, 255, 0.15)",
          borderRadius: matched ? "4px 4px 0 0" : "",
        },
      }}
    >
      {children}
      {matched && (
        <Divider
          css={{
            position: "absolute",
            width: "100%",
            top: "32px",
            height: "2px",
            backgroundColor: "rgba(133, 90, 255, 0.8)",
          }}
        />
      )}
    </Button>
  );
}

function Header() {
  // hooks
  const [user] = useUser();
  const navigator = useNavigate();

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
        <IconButton onClick={() => navigator("/")}>
          <SimpleLogoSVG />
        </IconButton>
        <Stack spacing="4px" direction="row">
          <MenuButton to="/dashboard">Dashboard</MenuButton>
          <MenuButton to="/schedule">Schedule</MenuButton>
        </Stack>
      </Stack>
      <Stack direction="row" css={{ alignItems: "center" }}>
        {/* TODO: 아바타 아이콘이 있으면 좋겠다. */}
        <Typography css={{ width: "48px", textOverflow: "ellipsis" }}>
          {user.username}
        </Typography>
        <ProfileButton />
      </Stack>
    </Stack>
  );
}

export { Header };
