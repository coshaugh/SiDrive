import React from "react";
import { TextField, Button } from "@material-ui/core";

import RegisterEditor from "./RegisterEditor";

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
      <div className="row">
        <div className="col-4">
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
        <div className="col-8">
          <div className="row">
            <div className="col-11">
              {this.state.chip.registers.map((reg, idx) => {
                return <RegisterEditor key={idx} register={reg} />;
              })}
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
        </div>
        {/* <form noValidate autoComplete="off" className="form-inline">
          
        </form> */}
      </div>
    );
  }
}

export default ChipEditor;
