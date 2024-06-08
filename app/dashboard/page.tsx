import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const Dashboard = () => {
    const person: { name: string; age: number } = {
        name: "Nazmul Hossain Anik",
        age: 26,
    };

    return (
        <>
            <h1>From first page</h1>
            <Link
                href={{
                    pathname: "/dashboard/newdashboard",
                    query: {
                        details: JSON.stringify(person),
                    },
                }}
            >
                Next Page Link
            </Link>
        </>
    );
};

export default Dashboard;
