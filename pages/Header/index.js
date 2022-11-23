import NavBar from "../../components/NavBar";
import Head from "next/head";

const Header = () => {
    return (
        <>
            <Head>
                <title>Next js Site</title>
            </Head>
            <header className="site_header">
                <NavBar />
            </header>
        </>
    );
};

export default Header;
