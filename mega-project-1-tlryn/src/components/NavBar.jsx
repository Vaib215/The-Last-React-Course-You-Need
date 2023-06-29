import { Link } from "react-router-dom"

const MenuItems = () => {
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
        </>
    )
}

const NavBar = () => {
    return (
        <nav className="navbar bg-base-100 shadow-2xl z-50 fixed top-0 w-screen">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost text-xl font-mono rounded-full lowercase">TLRYN</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <MenuItems />
                </ul>
            </div>
            <div className="navbar-end ml-auto">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <MenuItems />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar