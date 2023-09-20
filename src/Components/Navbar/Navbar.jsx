import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center py-5 px-3 bg-slate-400 border-b-2 border-purple-700">
                <h2 className="text-3xl font-bold">React Router</h2>
                <div className="flex gap-4 text-lg font-bold">
                    <Link to='/about'>About</Link>
                    <Link to='/contuct'>Contuct</Link>
                    <Link to='/users'>User</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/privecy'>Privecy</Link>
                </div>
                <input className="border-2" type="text" name="" id="" />
            </div>
        </>
    );
};

export default Navbar;