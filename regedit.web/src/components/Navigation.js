import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  flex: none;
`;

class Navigation extends React.Component {
  render() {
    return (
      <Div>
        <AppBar position="sticky" color="transparent" elevation={2}>
          <Tabs value={false}>
            {this.props.workspaces.map(function (workspace, idx) {
              return (
                <Tab key={idx} label={workspace.label} href={workspace.url} />
              );
            })}
            <Tab
              onClick={(e) => {
                this.props.toggleTheme();
              }}
              icon={<SettingsBrightnessIcon />}
            ></Tab>
          </Tabs>
        </AppBar>
      </Div>
    );
  }
}

export default Navigation;
