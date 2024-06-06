import { useEffect } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

export default function ListForm({ obj, setObj }: any) {
    const handleDelete = (index: number) => {
        const updatedObj = [...obj];
        updatedObj.splice(index, 1);
        setObj(updatedObj);
    };

    useEffect(() => {}, [obj]);

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2>
                                    <b>List Details</b>
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
                                        <a
                                            className="add"
                                            title="Add"
                                            data-toggle="tooltip"
                                        >
                                            <i className="material-icons"></i>
                                        </a>
                                        <a
                                            className="edit"
                                            title="Edit"
                                            data-toggle="tooltip"
                                        >
                                            <i className="material-icons"></i>
                                        </a>
                                        <a
                                            className="delete"
                                            title="Delete"
                                            data-toggle="tooltip"
                                        >
                                            <i className="material-icons"></i>
                                        </a>
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
