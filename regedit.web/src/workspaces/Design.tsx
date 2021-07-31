import React from "react";
import Container from "@material-ui/core/Container";

// import FileUpload from "../components/FileUpload";
import ChipEditor from "../components/ChipEditor";
// import AceEditor from "react-ace";

import Chip from "../models/Chip";
import Register from "../models/Register";
import IProps from "../interfaces/IProps";
import IState from "../interfaces/IState";

function getDummyChip(): Chip {
  let registers: Register[] = [
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

  const unknown = "unkown";

  return {
    name: unknown,
    partNumber: unknown,
    manufacturer: unknown,
    description: unknown,
    registers: registers,
  };
}

interface IDesignProps extends IProps {}

interface IDesignState extends IState {
  chip: Chip;
}

class Design extends React.Component<IDesignProps, IDesignState> {
  constructor(props) {
    super(props);

    this.state = {
      chip: getDummyChip(),
    };
  }

  render() {
    return (
      <div>
        <Container fixed>
          {/* <FileUpload /> */}
          <ChipEditor chip={this.state.chip} />
          {/* TODO-CON: link text in editor to gui */}
          {/* <AceEditor /> */}
        </Container>
      </div>
    );
  }
}

export default Design;
