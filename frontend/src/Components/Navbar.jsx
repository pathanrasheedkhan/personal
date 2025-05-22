import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sync with localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setDropdownOpen(false);
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-lg shadow-md">
      <ul className="hidden md:flex items-center gap-8 text-white font-medium">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>
          <li className="py-1">Home</li>
        </NavLink>
        <NavLink to="/allpdfs" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>
          <li className="py-1">All Branch PDF's</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>
          <li className="py-1">About</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center cursor-pointer gap-2 relative">
            <div
              className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-sm"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              U
            </div>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 text-base font-medium text-white z-20">
                <div className="min-w-48 bg-white/10 backdrop-blur-md rounded-lg flex flex-col gap-4 p-4 shadow-lg">
                  <p
                    onClick={() => {
                      navigate("/myprofile");
                      setDropdownOpen(false);
                    }}
                    className="hover:text-blue-300 cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p onClick={logout} className="hover:text-red-300 cursor-pointer">
                    Logout
                  </p>
                  <p
                    onClick={() => setDropdownOpen(false)}
                    className="text-sm text-gray-300 hover:text-white text-right cursor-pointer"
                  >
                    Close
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : null}

        <div className="md:hidden">
          <button onClick={() => setShowMenu(true)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-all duration-300 ${
          showMenu ? "bg-black/80 backdrop-blur-md" : "hidden"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setShowMenu(false)} className="text-white text-3xl">
            ✕
          </button>
        </div>

        <div className="flex justify-center overflow-y-auto h-[calc(100vh-60px)]">
          <ul className="flex flex-col items-center gap-6 mt-10 text-white text-lg font-semibold px-6 py-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg w-[90%] max-w-md">
            <NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink>
            <NavLink to="/allpdfs" onClick={() => setShowMenu(false)}>All Branch PDF's</NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink>

            {token && (
              <>
                <hr className="border-white/30 w-full ml-4" />
                <p
                  onClick={() => {
                    navigate("/myprofile");
                    setShowMenu(false);

                  }}
                  className="w-full text-center hover:text-blue-300 cursor-pointer "
                >
                  My Profile
                </p>
                <p
                  onClick={logout}
                  className="w-full text-center hover:text-red-400 cursor-pointer"
                >
                  Logout
                </p>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
