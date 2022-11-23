import Link from "next/link";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a title="Home">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a title="About">About</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a title="Contact">Contact</a>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    <a title="blog">blog</a>
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
