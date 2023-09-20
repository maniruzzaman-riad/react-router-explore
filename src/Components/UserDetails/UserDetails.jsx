import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name,address,company,username,website,email}=userDetails
    console.log(userDetails);
    return (
        <div>
            <h2 className="text-lg text-center font-bold mt-6">Profile of <span className="text-3xl"> {name}</span></h2>
            <p className="text-center text-lg font-semibold">Email: <span className="text-purple-800">{email}</span></p>
            <div className="ms-16">
                <h2 className="text-lg font-semibold mt-5">Username : {username}</h2>
                <h2 className="text-lg font-semibold mb-5">Visit : <span className="text-purple-800">{website}</span></h2>
                <h2 className="text-xl font-bold">Address :</h2>
                <div className="text-lg font-semibold ms-14">
                    <p>City : {address.city}</p>
                    <p>Street : {address.street}</p>
                    <p>Zipcode : {address.zipcode}</p>
                </div>
                <h2 className="text-xl font-bold mt-5">Company Details :</h2>
                <div className="text-lg font-semibold ms-14 mb-10">
                    <p>Company : {company.name}</p>
                    <p>Job : {company.catchPhrase}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;