import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData()
    
    // console.log(posts);
    return (
        <>
            <div>
                <h2 className="text-2xl font-medium ms-5 my-4">Total Posts : {posts.length}</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 p-3">
                {
                    posts.map(post =><Post key={posts.id} post={post}></Post>)
                }
            </div>
        </>
    );
};

export default Posts;