import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Component } from "react";

export default class Workspace extends Component {
  render() {
    return (
      <Box>
        <div>
          <Grid container>
            <Grid xs={12}>
              <img src="StoreLogo.scale-300.png" alt="My-todo-list" />
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
}
