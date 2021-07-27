import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import styles from "../css/style.module.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.navigation}>
        <AppBar position="static">
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
