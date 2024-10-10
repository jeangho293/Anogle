import { Button } from "@mui/material";
import { useSignOut } from "../../libs";

function HomeScreen() {
  const signOut = useSignOut();

  return (
    <div>
      home
      <Button onClick={signOut}>signOut</Button>
    </div>
  );
}

export { HomeScreen };
