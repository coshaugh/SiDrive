import React from "react";
import Header from "./components/Header";

import { Workspace, WorkspaceRouter } from "./components/WorkspaceRouter";
import Footer from "./components/Footer";

import Home from "./workspaces/Home";
import Design from "./workspaces/Design";
import Explore from "./workspaces/Explore";

// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function getWorkspaces(): Workspace[] {
  return [
    new Workspace(Home, "Home", "/"),
    new Workspace(Design, "Design", "/design"),
    new Workspace(Explore, "Explore", "/explore"),
  ];
}

const workspaceOptions = {
  workspaces: getWorkspaces(),
};

class App extends React.Component {
  render() {
    return (
      <Grid
      // container
      // direction="row"
      // justifyContent="center"
      // alignItems="center"
      >
        <Grid item className="row">
        <Header {...workspaceOptions} />
          
        </Grid>
        <Grid item className="row">
          <WorkspaceRouter {...workspaceOptions} />
        </Grid>
        <Grid item className="row">
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

export default App;
