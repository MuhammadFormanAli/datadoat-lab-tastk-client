import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";

const Navbar = () => {
    const {googleSignIn}= useContext(AuthContext)

    const handleGoogleSignIn =()=>{
googleSignIn()
.then(res=> console.log(res))
.then(error=>console.log(error))
    }
    return (
        <div >
            <div className="flex items-center justify-between c-container px-12 py-4 shadow-md">
            <div>
                <p className="font-bold text-lg">Logo</p>
            </div>

            <div className="flex items-center gap-3">
                <Link className="font-semibold" to='/'>Home</Link>
                <Link className="font-semibold" to='/courses'>Courses</Link>
                <button onClick={handleGoogleSignIn} className="font-semibold">Google Login</button>
                <Link className="font-semibold bg-purple-900 text-white px-3 py-2 rounded-e-full" to='#'>Get Started</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;