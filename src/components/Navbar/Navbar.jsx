import { NavLink } from "react-router-dom";

const Navbar = () => {

    const ulLInks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-500" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-500" : ""
                }
            >
                My Cart
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-slate-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLInks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tanjil Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        ulLInks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;