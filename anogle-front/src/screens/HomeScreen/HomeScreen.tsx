import { Button, Stack } from "@mui/material";
import { useSignOut } from "../../libs";

function HomeScreen() {
  const signOut = useSignOut();

  return (
    <Stack css={{ maxWidth: "120px" }}>
      home
      <Button onClick={signOut}>signOut</Button>
    </Stack>
  );
}

export { HomeScreen };
