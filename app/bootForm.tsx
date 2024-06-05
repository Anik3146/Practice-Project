import { Button, Col, Form, Row } from "react-bootstrap";

export default function BootForm() {
    return (
        <>
            <Form className="justify-auto">
                <h2 className="text-center my-4">Bootstrap Form</h2>
                <Col>
                    <Row className="md-2 my-2">
                        <Form.Group controlId="firstName">
                            <Form.Floating className="text-black">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your first name"
                                    name="firstName"
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
                                />
                                <label htmlFor="floatingInputCustom">
                                    Email Address
                                </label>
                            </Form.Floating>
                        </Form.Group>
                    </Row>
                </Col>

                <Button className="mt-2" variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
