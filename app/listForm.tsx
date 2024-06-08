import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

export default function ListForm({ obj, setObj }: any) {
    const [editIndex, setEditIndex] = useState(-1);
    const [tempChanges, setTempChanges] = useState<{ [key: number]: any }>({});

    const handleEdit = (index: number) => {
        if (editIndex === index) {
            setEditIndex(-1);
        } else {
            setEditIndex(index);
            setTempChanges(obj[index]);
        }
    };

    const handleDelete = (index: number) => {
        if (editIndex == -1) {
            const updatedObj = [...obj];
            updatedObj.splice(index, 1);
            setObj(updatedObj);
        } else {
            setEditIndex(-1);
        }
    };

    const handleSave = (index: number) => {
        setEditIndex(-1);
    };

    const handleCancel = (index: any) => {
        setObj((prev: typeof obj) => {
            obj[index] = tempChanges;
            return obj;
        });

        setEditIndex(-1);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        propertyName: string
    ) => {
        const { value } = e.target;
        setObj((prevObj: typeof obj) => {
            const updatedObj = [...prevObj];
            updatedObj[index] = { ...updatedObj[index], [propertyName]: value };
            return updatedObj;
        });
    };

    useEffect(() => {}, [tempChanges]);

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
                                    <td>
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={item.nameFirst}
                                                name="nameFirst"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        index,
                                                        "nameFirst"
                                                    )
                                                }
                                            />
                                        ) : (
                                            <span>{item.nameFirst}</span>
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={item.nameLast}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        index,
                                                        "nameLast"
                                                    )
                                                }
                                            />
                                        ) : (
                                            <span>{item.nameLast}</span>
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={item.email}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        index,
                                                        "email"
                                                    )
                                                }
                                            />
                                        ) : (
                                            <span>{item.email}</span>
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <>
                                                <Button
                                                    variant="success"
                                                    title="Save"
                                                    onClick={() =>
                                                        handleSave(index)
                                                    }
                                                >
                                                    Save
                                                </Button>
                                            </>
                                        ) : (
                                            <Button
                                                onClick={() =>
                                                    handleEdit(index)
                                                }
                                                variant="secondary"
                                                title="Edit"
                                                data-toggle="tooltip"
                                            >
                                                Edit
                                            </Button>
                                        )}
                                        <div
                                            style={{
                                                width: "10px",
                                                display: "inline-block",
                                            }}
                                        ></div>
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
                                        <Button
                                            onClick={() => {
                                                if (editIndex === index) {
                                                    handleCancel(index);
                                                } else {
                                                    handleDelete(index);
                                                }
                                            }}
                                            variant={
                                                editIndex === index
                                                    ? "secondary"
                                                    : "danger"
                                            }
                                            title={
                                                editIndex === index
                                                    ? "Cancel"
                                                    : "Delete"
                                            }
                                            data-toggle="tooltip"
                                        >
                                            {editIndex === index
                                                ? "Cancel"
                                                : "Delete"}
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
