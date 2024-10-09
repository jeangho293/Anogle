import {
  InputAdornment,
  TextField,
  TextFieldProps,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import LockSVG from "../../assets/mdi_lock.svg?react";
import EyeSVG from "../../assets/mdi_eye.svg?react";
import EyeOffSVG from "../../assets/mdi_eye-off.svg?react";

function PasswordTextField(props: TextFieldProps & { isConfirm?: boolean }) {
  const { isConfirm, ...rest } = props;

  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <TextField
      {...rest}
      placeholder={isConfirm ? "confirm password" : "password"}
      type={isShow ? "text" : "password"}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <LockSVG />
            </InputAdornment>
          ),
          endAdornment: !isConfirm && (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                {isShow ? <EyeSVG /> : <EyeOffSVG />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export { PasswordTextField };
