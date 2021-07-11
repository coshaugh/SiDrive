import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import styles from "../css/style.module.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.navigation}>
        <Container>
          <Navbar>
            <Nav>
              {this.props.navData.map(function (navItem, idx) {
                return (
                  <div key={idx}>
                    {navItem.children ? (
                      <Nav>
                        <Nav.Link>{navItem.label}</Nav.Link>
                        <ul>
                          {navItem.children.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <Nav.Link href={dropdownItem.url}>
                                {dropdownItem.label}
                              </Nav.Link>
                            </li>
                          ))}
                        </ul>
                      </Nav>
                    ) : (
                      <Nav.Link href={navItem.url}>{navItem.label}</Nav.Link>
                    )}
                  </div>
                );
              })}
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Navigation;
