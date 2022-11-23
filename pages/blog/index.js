import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            homePost: data,
        },
    };
};

const blog = ({ homePost }) => {
    return homePost.slice(0, 5).map((post) => {
        return (
            <React.Fragment key={post.id}>
                <div>
                    <h6 style={{ margin: 0 }}>{post.id}</h6>
                    <Link href={`/blog/${post.id}`}>
                        <a>
                            <h2>{post.title}</h2>
                        </a>
                    </Link>
                    <div className="post__content" dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
                <hr />
            </React.Fragment>
        );
    });
};

export default blog;
