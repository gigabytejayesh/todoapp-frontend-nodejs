import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function HomePage() {
  return (
    <Box>
      <div>
        <Grid container>
          <Grid xs={12}>
            <img src="logo192.png" alt="BigCo Inc. logo" />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <h1>MY-TODO-LIST</h1>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container disableEqualOverflow>
          <Grid xs={12}>
            <Button variant="contained" size="large" disableElevation>
              GET STARTED
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
