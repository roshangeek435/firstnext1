import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    const click = () => {
        router.push("/");
    };

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "500px", lineHeight: 1, margin: 0, textAlign: "center" }}>404</h1>
                <Link href="/">
                    <a style={{ fontSize: 40 }}>Back to Home</a>
                </Link>
                <br />
                <button onClick={click} style={{ fontSize: 40, background: "#fff", color: "#000" }}>
                    Button
                </button>
            </div>
        </>
    );
};

export default ErrorPage;
