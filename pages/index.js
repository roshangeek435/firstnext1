import img from "../public/1.jpg";
import Image from "next/image";
import Head from "next/head";

const index = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <div>
                index
                <Image src={img} />
            </div>
        </>
    );
};

export default index;
