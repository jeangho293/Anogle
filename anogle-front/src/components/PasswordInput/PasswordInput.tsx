import { TextField } from "@mui/material";

function PasswordInput() {
  return (
    <TextField
      slotProps={{ input: { startAdornment: <div>hi</div> } }}
      type="password"
    />
  );
}

export { PasswordInput };
