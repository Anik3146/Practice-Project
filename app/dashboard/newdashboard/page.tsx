"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function NewDashBoard() {
    const search = useSearchParams();
    const person: any = search.get("details");
    const res = JSON.parse(person);
    console.log(res);

    return (
        <>
            <h1>For testing purpose</h1>
        </>
    );
}
