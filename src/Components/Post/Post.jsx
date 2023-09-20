

const Post = ({post}) => {
    const {body,id,title}=post
    return (
        <>
            <div className="border-2 border-pink-700 rounded-lg p-3 space-y-3 bg-green-300">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>{body}</p>
            </div>
        </>
    );
};

export default Post;