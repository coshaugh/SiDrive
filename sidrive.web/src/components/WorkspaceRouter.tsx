import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // todo: look into using HashRouter for static file hosting

import NotFound from "../workspaces/NotFound";

interface IWorkspaceRouterProps {
  workspaces: Workspace[];
}

export class Workspace {
  component: React.ComponentType;
  label: string;
  url: string;
 
  constructor(
    component: React.ComponentType,
    label: string,
    url: string
  ) {
    this.component = component;
    this.label = label;
    this.url = url;
  }
}

export class WorkspaceRouter extends React.Component<IWorkspaceRouterProps> {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {this.props.workspaces.map((workspace: Workspace, idx) => {
              return (
                <Route
                  exact
                  path={workspace.url}
                  component={workspace.component}
                  key={idx}
                />
              );
            })}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
