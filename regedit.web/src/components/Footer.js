import React from "react";
import styled from "styled-components";

const Div = styled.div`
  flex: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Footer = () => (
  <Div>
    <h5>
      Created By: {" "}
      <a href="https://www.linkedin.com/in/conor-o-shaughnessy-857a91177/">
        Conor O'Shaughnessy
      </a>{" "}
      &&{" "}
      <a href="https://www.linkedin.com/in/shane-petcavich-8a06303a/">
        Shane Petcavitch
      </a>
    </h5>
  </Div>
);

export default Footer;
