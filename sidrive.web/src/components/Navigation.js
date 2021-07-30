import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="sticky" color="transparent" elevation={0}>
          <Tabs value={false}>
            {this.props.workspaces.map(function (workspace, idx) {
              return (
                <Tab key={idx} label={workspace.label} href={workspace.url} />
              );
            })}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default Navigation;
