

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Alert from 'react-bootstrap/Alert';
import { Button, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TestPage() {
    const [clicked, setClickedStatus] = useState(false);
    const primaryButton = () => {
        setClickedStatus(true);
    }
    return (
        <>
            <div className="container">
                <Alert dismissible variant= {clicked? "success" : "danger"}>
                    <Alert.Heading>{clicked? "Successful!!!" : "Failure!!!"}</Alert.Heading> 
                </Alert>

                <h1>Bootstrap Buttons</h1>
                <Button onClick={primaryButton} variant={clicked? "outline-success" : "outline-danger"}>Primary Button</Button> : {clicked ? "clicked" : "not clicked"}<br />
            <h2>Stack with dropdown buttons</h2>
                <Stack direction="horizontal" gap={5}>
                <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Light dropdown"
        className="mt-2"
        data-bs-theme="light"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Dark dropdown"
        className="mt-2"
        data-bs-theme="dark"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>
    </Stack>
    <br />
    <Container fluid="md">
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
        </div>
        </>
    );
}

