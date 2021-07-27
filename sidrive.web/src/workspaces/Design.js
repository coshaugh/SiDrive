import React from "react";

import FileUpload from "../components/FileUpload";
import ChipEditor from "../components/ChipEditor";
// import AceEditor from "react-ace";

function getDummyChip() {
  const registers = [
    {
      name: "reg1",
      address: 0x0f,
      description: "reg1 description",
      bitGroups: [],
      registerDependencies: [],
    },
    {
      name: "reg2",
      address: 0x1e,
      description: "reg2 description",
      bitGroups: [],
      registerDependencies: [],
    },
    {
      name: "reg3",
      address: 0x1f,
      description: "reg3 description",
      bitGroups: [],
      registerDependencies: [],
    },
  ];

  return {
    name: "dummy chip",
    descriptiong: "dummy description",
    registers: registers,
  };
}

class Design extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chip: getDummyChip(),
    };
  }

  render() {
    return (
      <div>
        <FileUpload />
        <ChipEditor chip={this.state.chip} />
        {/* TODO-CON: link text in editor to gui */}
        {/* <AceEditor /> */}
      </div>
    );
  }
}

export default Design;
