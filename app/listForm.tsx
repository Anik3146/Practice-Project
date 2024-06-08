import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Person } from "./model";

export default function ListForm({ obj, setObj, setToggler }: any) {
    const [editIndex, setEditIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [person, setPerson] = useState<Person>({
        id: "",
        nameFirst: "",
        nameLast: "",
        email: "",
    });

    const handleCloseModal = () => {
        setShowModal(false);
        setEditIndex(-1);
    };

    const handleEdit = (index: number) => {
        setEditIndex(index);
        setPerson(obj[index]);
        setShowModal(true);
    };
    const handleDelete = (index: number) => {
        if (editIndex == -1) {
            const updatedObj = [...obj];
            updatedObj.splice(index, 1);
            setObj(updatedObj);
            setToggler(true);
        } else {
            setEditIndex(-1);
        }
    };

    const handleSave = () => {
        setObj((prevObj: any) => {
            const updatedObj = [...prevObj];
            updatedObj[editIndex] = person;
            return updatedObj;
        });
        setToggler(true);
        setShowModal(false);
        setEditIndex(-1);
    };

    const handleCancel = () => {
        setShowModal(false);
        setEditIndex(-1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson((prevPerson) => ({
            ...prevPerson,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2>
                                    <b>List details</b>
                                </h2>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {obj.map((item: Person, index: number) => (
                                <tr key={index}>
                                    <td>{item.nameFirst}</td>
                                    <td>{item.nameLast}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Button
                                            onClick={() => handleEdit(index)}
                                            variant="secondary"
                                        >
                                            Edit
                                        </Button>{" "}
                                        <Button
                                            onClick={() => handleDelete(index)}
                                            variant="danger"
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for Editing */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Person</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="nameFirst"
                                value={person.nameFirst}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="nameLast"
                                value={person.nameLast}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={person.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
