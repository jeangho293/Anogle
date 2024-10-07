import { Stack } from "@mui/material";
import ClimbingPNG from "../../assets/climb_image.png";

function SignInScreen() {
  return (
    <Stack direction="row" css={{ width: "100%", height: "100vh" }}>
      <Stack css={{ width: "50%" }}>fdas</Stack>

      <Stack css={{ width: "50%" }}>
        <img src={ClimbingPNG} css={{ overflow: "hidden" }} />
      </Stack>
    </Stack>
  );
}

export { SignInScreen };
