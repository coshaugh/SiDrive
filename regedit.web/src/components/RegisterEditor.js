import React from "react";
import { TextField, Paper, Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

const Div = styled.div`
  display: inline-block;
`;

class RegisterEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: props.register,
    };
  }

  render() {
    return (
      <Div>
        <Paper elevation={2}>
          <Card variant="outlined">
            <CardContent>
              <div>
                <TextField
                  required
                  id="register.name"
                  label="Register"
                  value={this.state.register.name}
                />
              </div>
              <div>
                <TextField
                  id="register.description"
                  label="Description"
                  value={this.state.register.description}
                />
              </div>
              <div>
                <TextField
                  id="register.address"
                  label="Address"
                  value={this.state.register.address}
                ></TextField>
              </div>
            </CardContent>
          </Card>
        </Paper>
      </Div>
    );
  }
}

export default RegisterEditor;
