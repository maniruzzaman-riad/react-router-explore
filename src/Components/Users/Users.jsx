import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData()
    // console.log(users);
    return (
        <div>
            <h2 className="text-2xl font-medium ms-5 my-4">Total Users : {users.length}</h2>
            <div className="grid grid-cols-3 gap-3 p-2">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;