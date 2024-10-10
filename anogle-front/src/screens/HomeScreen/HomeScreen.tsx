import { Button, Stack } from "@mui/material";
import { useSignOut } from "../../libs";

function HomeScreen() {
  const signOut = useSignOut();

  return (
    <Stack css={{ height: "1400px" }}>
      home
      <Stack>
        <Button onClick={signOut}>signOut</Button>
      </Stack>
    </Stack>
  );
}

export { HomeScreen };
