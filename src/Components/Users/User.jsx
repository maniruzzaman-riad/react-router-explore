import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,phone,name,email} =user
    return (
        <>
            <div className="space-y-3 bg-lime-300 p-4 flex flex-col rounded-lg">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-xl font-semibold">Email : {email}</p>
                <p className="text-xl font-semibold flex-grow">Phone : {phone}</p>
                <Link to={`/users/${id}`}><button className="bg-blue-600 py-1 text-white text-lg font-semibold rounded-lg hover:bg-emerald-800 w-full">Details</button></Link>
            </div>
        </>
    );
};

export default User;