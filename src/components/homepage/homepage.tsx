import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { Google } from "@mui/icons-material";
import { Component } from "react";
import { AppService } from "../../services/app.service";
import {
  AppBar,
  Container,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

export default class HomePage extends Component {
  private appService: AppService;

  constructor(props: any) {
    super(props);
    this.appService = new AppService();
  }

  getStarted = () => {
    window.location.assign(this.appService.callGoogleLoginAPI());
  };

  render() {
    return (
      <div>
        <div>
          <AppBar enableColorOnDark color="transparent" position="sticky">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  MY-TODO-APP
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ flexGrow: 0 }}>
                  <Button
                    variant="outlined"
                    // size="large"
                    onClick={this.getStarted}
                    startIcon={<Google />}
                    disableElevation
                  >
                    Sign in
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Container maxWidth="lg">
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "95vh" }}
              spacing={2}
            >
              <Grid xs={12} sm={4}>
                <h1>
                  <span style={{ color: "darkcyan", fontFamily: "inherit" }}>
                    My Todo App:
                  </span>{" "}
                  Get Things Done with Ease!
                </h1>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={this.getStarted}
                  startIcon={<Google />}
                  disableElevation
                >
                  Sign in with Google
                </Button>
              </Grid>
              <Grid xs={0} sm={2} />
              <Grid xs={12} sm={6}>
                <img
                  src="illustration.svg"
                  alt="My-todo-list"
                  style={{ maxWidth: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            style={{ backgroundColor: "white" }}
            elevation={1}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Box></Box>
              <Box justifyContent="center" maxWidth="100%">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    window.open(
                      process.env.REACT_APP_MY_GITHUB_PROFILE,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  sx={{
                    m: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                  }}
                >
                  Project by Jayesh Wadibhasme
                </Button>
              </Box>
              <Box></Box>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}
