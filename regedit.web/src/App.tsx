import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Grid } from "@material-ui/core";

import Navigation from "./components/Navigation";
import { workspaces, WorkspaceRouter } from "./workspaces/WorkspaceProvider";
import Footer from "./components/Footer";

import { GlobalStyles } from "./css/GlobalStyles";
import { lightTheme, darkTheme } from "./css/Themes";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = {
    toggleTheme: () =>
      theme === "light" ? setTheme("dark") : setTheme("light"),
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Grid container direction="row">
        <Grid item className="row" xs={12}>
          <Navigation {...workspaces} {...themeToggler} />
        </Grid>
        <Grid item className="row" xs={12}>
          <WorkspaceRouter />
        </Grid>
        <Grid item className="row" xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
