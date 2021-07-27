import React from "react";

import RegisterEditor from "./RegisterEditor";

import { TextField } from "@material-ui/core";

class ChipEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chip: props.chip,
    };
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <div>
            <TextField required id="chip.name" label="Name" />
          </div>
          <div>
            <TextField id="chip.description" label="Description" />
          </div>
        </form>
        {this.state.chip.registers.map((reg, idx) => {
          return <RegisterEditor key={idx} register={reg} />;
        })}
      </div>
    );
  }
}

export default ChipEditor;
