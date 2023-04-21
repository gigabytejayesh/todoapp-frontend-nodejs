import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Component } from "react";

export default class Workspace extends Component {
  render() {
    return (
      <Box alignItems="center" justifyContent="center">
        <Grid container>
          <Grid alignItems="center" justifyContent="center" xs={12}>
            <img src="ruko-zara-sabar-karo.jpg" alt="Hindustani bhau" />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
