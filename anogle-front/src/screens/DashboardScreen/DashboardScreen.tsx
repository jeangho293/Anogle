import { Stack, Box, Typography } from "@mui/material";

function DashboardScreen() {
  return (
    <Stack direction="row">
      <Box
        position="sticky"
        css={{
          top: "49px",
          height: "calc(100vh - 120px)",
          width: "240px",
          borderRight: "thin solid rgba(133, 90, 255, 0.20)",
          padding: "36px 24px",
        }}
      >
        fdafd
        <Typography>Recent activity</Typography>
        <Typography>My favorite gym</Typography>
        <Typography>My clue</Typography>
      </Box>
      <Stack css={{ height: "1400px" }}>home</Stack>
    </Stack>
  );
}

export { DashboardScreen };
