import { TextField, IconButton, TextFieldProps } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

function PasswordInput(props: TextFieldProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <TextField
      {...props}
      placeholder="비밀번호"
      type={isShow ? "text" : "password"}
      slotProps={{
        input: {
          startAdornment: <LockIcon css={{ marginRight: "8px" }} />,
          endAdornment: (
            <IconButton onClick={() => setIsShow(!isShow)}>
              {isShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          ),
        },
      }}
    />
  );
}

export { PasswordInput };
