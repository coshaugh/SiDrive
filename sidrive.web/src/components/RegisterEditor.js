import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class RegisterEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: props.register,
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Register - {this.state.register.name}
            </Typography>
            <Typography variant="body2" component="p">
              Description - {this.state.register.description}
            </Typography>
            <Typography variant="body2" component="p">
              Address - {this.state.register.address}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default RegisterEditor;
