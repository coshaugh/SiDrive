import React from "react";


class RegisterEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.register.name,
      address: props.register.address,
      description: props.register.description,
      bitGroups: props.register.bitGroups || [],
      registerDependencies: props.register.registerDependencies || [],
    };
  }

  render() {
    return (
      <div>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Register - {this.state.name}</Card.Title>
            <Card.Text>Description - {this.state.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Address - {this.state.address}</ListGroupItem>
          </ListGroup>
        </Card> */}
      </div>
    );
  }
}

export default RegisterEditor;
