import React from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

import RegisterEditor from "./RegisterEditor";

const Div = styled.div`
  padding-top: 0.5rem;
`;

class ChipEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chip: props.chip,
    };
  }

  addRegister = (event) => {
    const newReg = {};
    let chip = this.state.chip;
    chip.registers.push(newReg);

    this.setState({
      chip: this.state.chip,
    });
  };

  render() {
    return (
      <Div>
        <div className="row">
          <div className="col-2">
            <h5>General Info</h5>
            <div>
              <TextField
                required
                id="chip.name"
                label="Name"
                value={this.state.chip.name}
              />
            </div>
            <div>
              <TextField
                id="chip.partNumber"
                label="PartNumber"
                value={this.state.chip.partNumber}
              />
            </div>
            <div>
              <TextField
                id="chip.manufacturer"
                label="Manufacturer"
                value={this.state.chip.manufacturer}
              />
            </div>
            <div>
              <TextField
                id="chip.description"
                label="Description"
                value={this.state.chip.description}
              />
            </div>
          </div>
          <div className="col-9">
            <h5>Registers</h5>
            <div className="row">
              {this.state.chip.registers.map((reg, idx) => {
                return <RegisterEditor key={idx} register={reg} />;
              })}
            </div>
          </div>
          <div className="col-1">
            <Button
              variant="outlined"
              color="primary"
              onClick={this.addRegister}
            >
              Add Register
            </Button>
          </div>
        </div>
      </Div>
    );
  }
}

export default ChipEditor;
