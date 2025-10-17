import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Dropdown, TextInput } from "flowbite-react";
import {
  AiOutlineSearch,
  AiOutlineSun,
  AiOutlineMoon,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Header = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // 🌓 Theme handling
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-white flex items-center gap-1"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Ravi
          </span>
          Blog
        </Link>

        {/* Search (Desktop Only) */}
        <div className="hidden lg:block w-1/3">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="w-full"
          />


        </div>
        <div className="hidden lg:block w-1/3">
                <ul className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 py-4 lg:py-2 text-white">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>


        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <Button
            pill
            color="gray"
            onClick={toggleTheme}
            className="border border-gray-600 hover:border-purple-500 hover:bg-gray-800 transition-all"
          >
            {theme === "dark" ? (
              <AiOutlineSun className="text-yellow-400" size={20} />
            ) : (
              <AiOutlineMoon className="text-gray-800" size={20} />
            )}
          </Button>

          {/* Mobile Search */}
          <Button
            pill
            color="gray"
            className="lg:hidden border border-gray-600 hover:border-purple-500 transition-all"
          >
            <AiOutlineSearch />
          </Button>

          {/* User Section */}
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm font-medium">
                  {currentUser.username}
                </span>
                <span className="block text-sm truncate text-gray-500 dark:text-gray-400">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item as={Link} to="/dashboard">
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/settings">
                Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button
                outline
                gradientDuoTone="purpleToPink"
                className="hover:shadow-md transition-all"
              >
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-pink-400"
          >
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}

    </header>
  );
};

export default Header;
