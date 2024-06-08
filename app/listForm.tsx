import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

export default function ListForm({ obj, setObj }: any) {
    const handleDelete = (index: number) => {
        const updatedObj = [...obj];
        updatedObj.splice(index, 1);
        setObj(updatedObj);
    };
    useEffect(() => {
        console.log(obj);
    }, [obj]);

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
                            {obj.map((item: any, index: any) => (
                                <tr key={index}>
                                    <td>{item.nameFirst}</td>
                                    <td>{item.nameLast}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Button
                                            variant="secondary"
                                            title="Edit"
                                            data-toggle="tooltip"
                                        >
                                            Edit
                                        </Button>
                                        {/* Divider gap */}
                                        <div
                                            style={{
                                                width: "10px",
                                                display: "inline-block",
                                            }}
                                        ></div>
                                        {/* Divider */}
                                        <hr
                                            style={{
                                                height: "1px",
                                                width: "1px",
                                                border: "none",
                                                backgroundColor: "#ccc",
                                                margin: "0 10px",
                                                display: "inline-block",
                                            }}
                                        />
                                        {/* Delete button */}
                                        <Button
                                            onClick={() => handleDelete(index)}
                                            variant="danger"
                                            title="Delete"
                                            data-toggle="tooltip"
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
        </>
    );
}
