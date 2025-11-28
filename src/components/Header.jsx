import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useUser } from "../context/userProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const onLogout = () => {
    // Clear user state on logout
    setUser(false);
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 text-center md:text-left ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyShop
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 md:items-center">
          <NavLink to="/" className="hover:text-indigo-600">
            Home
          </NavLink>
          <NavLink to="/shop" className="hover:text-indigo-600">
            Shop
          </NavLink>
          <NavLink to="/about" className="hover:text-indigo-600">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-indigo-600">
            Contact
          </NavLink>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
              <span className="text-gray-700">Hi, {user.name}</span>
              <button
                onClick={onLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link to="/shop" className="hover:text-indigo-600">
              Shop
            </Link>
            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
            {user ? (
              <button
                onClick={onLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
