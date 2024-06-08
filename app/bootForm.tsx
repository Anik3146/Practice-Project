import { useState } from "react";
import { Button, Col, Form, Row, Toast } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function BootForm({ sendDataToParent }: any) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        id: uuidv4(),
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setShow(true);
        sendDataToParent(formData);
    };

    const onInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className="justify-auto">
                <h2 className="text-center my-4">Bootstrap Form </h2>

                <Col>
                    <Row className="md-2 my-2">
                        <Form.Group controlId="firstName">
                            <Form.Floating className="text-black">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your first name"
                                    name="firstName"
                                    onChange={onInputChange}
                                />
                                <label htmlFor="floatingInputCustom">
                                    First Name
                                </label>
                            </Form.Floating>
                        </Form.Group>
                    </Row>
                    <Row className="md-2 my-2">
                        <Form.Group controlId="lastName">
                            <Form.Floating className="text-black">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your last name"
                                    name="lastName"
                                    onChange={onInputChange}
                                />
                                <label htmlFor="floatingInputCustom">
                                    Last Name
                                </label>
                            </Form.Floating>
                        </Form.Group>
                    </Row>
                    <Row className="md-2  my-2">
                        <Form.Group controlId="email">
                            <Form.Floating className="text-black">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your email address"
                                    name="email"
                                    onChange={onInputChange}
                                />
                                <label htmlFor="floatingInputCustom">
                                    Email Address
                                </label>
                            </Form.Floating>
                        </Form.Group>
                    </Row>
                </Col>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                            style={{ backgroundColor: "green" }} // Set background color to green
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Success</strong>{" "}
                                {/* Change the title */}
                                <small>Just now</small>
                            </Toast.Header>
                            <Toast.Body>
                                Form submitted successfully!
                            </Toast.Body>
                        </Toast>
                    </Col>
                </Row>

                <Button className="mt-2" variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
