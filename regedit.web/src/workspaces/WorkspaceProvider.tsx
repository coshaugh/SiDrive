import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // todo: look into using HashRouter for static file hosting
import styled from "styled-components";

import Home from "./Home";
import Design from "./Design";
import Explore from "./Explore";
import NotFound from "./NotFound";

import { projectName } from "../utility/constants";

const Div = styled.div`
  overflow-y: scroll;
  
  margin: 0;
  height: 100%;
  min-height: 100%;

  width: 100%;
  display: flex;
  flex: auto;
  flex-direction: column;
`;

class Workspace {
  component: React.ComponentType;
  label: string;
  url: string;

  constructor(component: React.ComponentType, label: string, url: string) {
    this.component = component;
    this.label = label;
    this.url = url;
  }
}

const landingPage = new Workspace(Home, projectName, "/");
const otherPages = [
  new Workspace(Design, "Design", "/design"),
  new Workspace(Explore, "Explore", "/explore"),
];

const workspaces = {
  workspaces: [landingPage, ...otherPages],
};

class WorkspaceRouter extends React.Component {
  getRoute = (workspace) => {
    return (
      <Route
        exact
        path={workspace.url}
        component={workspace.component}
        key={workspace.label}
      />
    );
  };

  render() {
    return (
      <Div>
        <Router>
          <Switch>
            {this.getRoute(landingPage)}
            {otherPages.map(this.getRoute)}
            {/* add settings workspace thing here..? */}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Div>
    );
  }
}

export { workspaces, WorkspaceRouter };
