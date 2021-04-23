import React from "react";
import { Container, Form, Jumbotron, Button, FormControl } from "react-bootstrap";
import "../styles/Jumbo.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Jumbo() {
  return (
    <Jumbotron fluid>
      <Container className="d-flex justify-content-between px-5">
        <h1 className="pl-4">Employee Directory </h1>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
