import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import SimpleLogoSVG from "../../assets/simple-logo.svg?react";
import DownArrowSVG from "../../assets/mdi_menu-down.svg?react";
import { useSignOut, useUser } from "../../libs";
import { ReactNode, useState } from "react";
import LogoutIcon from "../../assets/logout-icon.svg?react";

function MenuButton(props: { children: ReactNode; to: string }) {
  // props destructure
  const { children, to } = props;

  const navigator = useNavigate();
  const { pathname } = useLocation();

  const matched = to === pathname;

  return (
    <Button
      onClick={() => navigator(to)}
      css={{
        position: "relative",
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [user] = useUser();
  const signOut = useSignOut();

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
          <MenuButton to="/">Home</MenuButton>
          <MenuButton to="/dashboard">Dashboard</MenuButton>
          <MenuButton to="/schedule">Schedule</MenuButton>
        </Stack>
      </Stack>
      <Stack direction="row" css={{ alignItems: "center" }}>
        {/* TODO: 아바타 아이콘이 있으면 좋겠다. */}
        <Typography css={{ width: "48px", textOverflow: "ellipsis" }}>
          {user.username}
        </Typography>

        {/* TODO: 여기는 컴포넌트화 시키는게 좋을 듯. */}
        <IconButton
          id="profile-button"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <DownArrowSVG />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "profile-button",
          }}
          css={{
            "& .MuiPaper-root": {
              minWidth: "120px",
              boxShadow: "none",
              border: "thin solid #000000",
            },
          }}
        >
          <MenuItem onClick={() => signOut()}>
            <Stack
              spacing="8px"
              direction="row"
              css={{ alignItems: " center" }}
            >
              <LogoutIcon />
              <Typography css={{ fontSize: "14px" }}>Logout</Typography>
            </Stack>
          </MenuItem>
        </Menu>
      </Stack>
    </Stack>
  );
}

export { Header };
