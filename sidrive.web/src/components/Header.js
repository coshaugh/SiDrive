import React from "react";

import Navigation from "./Navigation";

// import styled from "styled-components";

// const Div = styled.div`
//   padding: 5px;
//   margin: 5px;
//   height: inherit;
// `;

class Header extends React.Component {
  render() {
    return (
      <div class="row">
        <div className="col-2">
          <h1>RegEdit</h1>
        </div>
        <div className="col-8">
          <Navigation {...this.props} />
        </div>
        <div className="col-2">
          {/* TODO-CON: Gear icon / settings workpanel */}
        </div>
      </div>
    );
  }
}

export default Header;
