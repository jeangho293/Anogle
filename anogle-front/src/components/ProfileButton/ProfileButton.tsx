import {
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import LogoutIcon from "../../assets/logout-icon.svg?react";
import DownArrowSVG from "../../assets/mdi_menu-down.svg?react";
import ProfileIcon from "../../assets/profile-icon.svg?react";
import { useSignOut } from "../../libs";

function DropDownMenuItem(props: {
  icon?: ReactNode;
  name: string;
  onClick: () => void;
}) {
  // props destructure
  const { icon, name, onClick } = props;

  return (
    <MenuItem onClick={onClick}>
      <Stack spacing="8px" direction="row" css={{ alignItems: "center" }}>
        {icon}
        <Typography css={{ fontSize: "14px" }}>{name}</Typography>
      </Stack>
    </MenuItem>
  );
}

function ProfileButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // hooks
  const signOut = useSignOut();

  // calculate values
  const open = Boolean(anchorEl);
  return (
    <>
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
        <DropDownMenuItem
          icon={<ProfileIcon />}
          name="Profile"
          onClick={() => {}}
        />
        <DropDownMenuItem
          icon={<LogoutIcon />}
          name="Logout"
          onClick={signOut}
        />
      </Menu>
    </>
  );
}

export { ProfileButton };
