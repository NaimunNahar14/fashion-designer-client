import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../Hooks/UseCart";


const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [cart] = useCart();

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }

    const navOptions = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/instructors">Instructors</Link>
        </li>
        <li>
            <Link to="/classes">Classes</Link>
        </li>
        <li>
            <Link to="/dashboard/selectedclasses">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        <li>
            <Link to="/">Reviews</Link>
        </li>

        {
            user ? <>
                <span>{user?.displayName}</span>
                {/* <span>{user?.photoURL}</span> */}
                <button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div
                className={`navbar ${theme === "light" ? "bg-cyan-500" : "bg-gray-800 text-white"
                    }`}
            >
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${theme === "light" ? "bg-base-100" : "bg-gray-700"
                                } rounded-box w-52`}
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-accent normal-case text-xl uppercase">
                        StyleMakers Fashion
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navOptions}
                        <button
                            className={`toggle ml-3 ${theme === "light" ? "bg-gray-300" : "bg-gray-600"
                                }`}
                            onClick={toggleTheme}
                        >
                            {/* Add your custom icon or symbol here */}
                            {theme === "light" ? "" : ""}
                        </button>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;