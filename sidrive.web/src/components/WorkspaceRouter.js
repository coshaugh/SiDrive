import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // todo: look into using HashRouter for static file hosting

import NotFound from "../workspaces/NotFound";

import styles from "../css/style.module.css";

class WorkspaceRouter extends React.Component {
  render() {
    return (
      <div className={styles.workspace}>
        <Router>
          <Switch>
            {this.props.routerData.map((workspace, idx) => {
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

export default WorkspaceRouter;
