import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import WorkspaceRouter from "./components/WorkspaceRouter";
import Footer from "./components/Footer";

import Home from "./workspaces/Home";
import Design from "./workspaces/Design";
import Explore from "./workspaces/Explore";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function createWorkspaceObj(component, label, url) {
  return {
    component: component,
    label: label,
    url: url,
  };
}

var baseWorkspaces = [
  createWorkspaceObj(Home, "Home", "/"),
  createWorkspaceObj(Design, "Design", "/design"),
  createWorkspaceObj(Explore, "Explore", "/explore"),
];

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Header />
          <Navigation navData={baseWorkspaces} />
        </Row>
        <Row>
          <WorkspaceRouter routerData={baseWorkspaces} />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default App;
