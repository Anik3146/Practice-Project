"use client"

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestPage from "./testPage";
import React from "react";
import { ReactDOM } from "react";
import NavbarComp from "./navbar";
import FormComp from "./form";
import ClassComp from "./classComp";
import TransitionComp from "./transitionComp";
import ValidationComp from "./validationComp";


export default function Page() {
  return (
    <div>
    <NavbarComp/>
    <ClassComp/>
    <ValidationComp/>

    </div>
  );
}
