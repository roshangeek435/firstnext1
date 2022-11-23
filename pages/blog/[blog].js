export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const paths = data.map((CurElem) => {
        return {
            params: {
                blog: CurElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.blog;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    return {
        props: {
            homePost: data,
        },
    };
};

// const blog1 = () => {
//     const router = useRouter();
//     const pageNumber = router.query.blog;

//     return <div>blog {pageNumber}</div>;
// };

const blog1 = ({ homePost }) => {
    return (
        <div>
            <h6 style={{ margin: 0 }}>{homePost.id}</h6>
            <h2>{homePost.title}</h2>
            <div className="post__content" dangerouslySetInnerHTML={{ __html: homePost.body }} />
        </div>
    );
};

export default blog1;
