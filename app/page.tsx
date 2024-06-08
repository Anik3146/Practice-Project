"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TestPage from "./testPage";
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import NavbarComp from "./navbar";
import FormComp from "./form";
import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import image from "../public/image.png";
import { useRouter } from "next/router";

import {
    Button,
    Col,
    Container,
    Form,
    ListGroup,
    Nav,
    NavDropdown,
    Navbar,
    Row,
    FloatingLabel,
} from "react-bootstrap";
import CanvasMenu from "./canvasMenuComponent";
import BootForm from "./bootForm";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import ListForm from "./listForm";

export default function Page() {
    const menu: string[] = ["create form", "list item"];
    const [selectForm, setSelectForm] = useState<JSX.Element | null>(null);
    const [listItem, setListItem] = useState<JSX.Element | null>(null);

    class person {
        constructor(
            public id: string,
            public nameFirst: string,
            public nameLast: string,
            public email: string
        ) {}
    }

    const [obj, setObj] = useState<person[]>([]);

    const receiveDataFromChild = (data: any) => {
        const newPerson = new person(
            (data.id = uuidv4()),
            data.firstName,
            data.lastName,
            data.email
        );

        if (
            newPerson.nameFirst != "" ||
            newPerson.nameLast != "" ||
            newPerson.email != ""
        ) {
            setObj((prevObj) => [...prevObj, newPerson]);
        }
    };

    const handleClick = (item: any) => {
        if (item == "create form") {
            setListItem(null);
            setSelectForm(<BootForm sendDataToParent={receiveDataFromChild} />);
        } else if (item == "list item") {
            setSelectForm(null);
            setListItem(<ListForm obj={obj} setObj={setObj} />);
        } else {
            setListItem(null);
            setSelectForm(null);
        }
    };

    useEffect(() => {
        handleClick("list item");
        console.log(obj);
    }, [obj]);

    return (
        <div>
            <header
                className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
                data-bs-theme="dark"
                style={{ height: 80 }}
            >
                <a
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white mx-4"
                    href="#"
                >
                    <Image src={image} width={50} height={50} alt="LOGO" />
                </a>

                <div className="d-flex justify-content-end mx-4">
                    <div className="dropdown bg-dark">
                        <button
                            className="btn btn-success dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav flex-row d-md-none">
                        <li className="nav-item text-nowrap">
                            <button
                                className="nav-link px-3 text-white"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#sidebarMenu"
                                aria-controls="sidebarMenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <GrMenu />
                            </button>
                        </li>
                    </ul>
                </div>
            </header>

            <div
                className="container-fluid wrapper"
                style={{
                    backgroundImage: `url('/background.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                    minHeight: "100vh",
                    width: "100%",
                }}
            >
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div
                            className="offcanvas-md offcanvas-end bg-body-tertiary"
                            tabIndex={-1}
                            id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel"
                        >
                            <div
                                className="offcanvas-header"
                                style={{ backgroundColor: "gray" }}
                            >
                                <h5
                                    className="offcanvas-title"
                                    id="sidebarMenuLabel"
                                >
                                    RTC Hubs Limited
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarMenu"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div
                                className="offcanvas-body d-md-flex flex-column pt-lg-3 overflow-y-auto"
                                style={{
                                    backgroundColor: "gray",
                                    minHeight: "100vh",
                                }}
                            >
                                <h2 className="text-center">List</h2>

                                <div
                                    style={{
                                        backgroundColor: "gray",
                                        color: "white",
                                    }}
                                >
                                    <ListGroup className="justify-center text-center">
                                        {menu.map((item, index) => (
                                            <ListGroup.Item
                                                key={index}
                                                style={{
                                                    backgroundColor: "gray",
                                                }}
                                            >
                                                <button
                                                    onClick={() =>
                                                        handleClick(item)
                                                    }
                                                    style={{
                                                        backgroundColor: "gray",
                                                        color: "white",
                                                        border: "none",
                                                        padding: "10px 20px",
                                                        borderRadius: "0px",
                                                        margin: "5px",
                                                        cursor: "pointer",
                                                        fontSize: "16px",
                                                        fontWeight: "bold",
                                                        textTransform:
                                                            "uppercase",
                                                    }}
                                                >
                                                    {item}
                                                </button>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*main body*/}
                    <main className="container-fluid col-6 mt-3 text-white justify-items-center">
                        {selectForm === null && listItem == null && (
                            <h1 className="text-center">Dashboard</h1>
                        )}
                        {selectForm}
                        {listItem}
                    </main>
                </div>
            </div>
        </div>
    );
}
