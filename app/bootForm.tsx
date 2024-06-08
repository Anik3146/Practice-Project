<<<<<<< HEAD
import { Button, Col, Form, Row } from "react-bootstrap";

export default function BootForm() {
    return (
        <>
            <Form className="justify-auto">
                <h2 className="text-center my-4">Bootstrap Form</h2>
=======
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function BootForm({ sendDataToParent }: any) {
    const [formData, setFormData] = useState({
        id: uuidv4(),
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
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
>>>>>>> main
                <Col>
                    <Row className="md-2 my-2">
                        <Form.Group controlId="firstName">
                            <Form.Floating className="text-black">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your first name"
                                    name="firstName"
<<<<<<< HEAD
=======
                                    onChange={onInputChange}
>>>>>>> main
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
<<<<<<< HEAD
=======
                                    onChange={onInputChange}
>>>>>>> main
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
<<<<<<< HEAD
=======
                                    onChange={onInputChange}
>>>>>>> main
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
