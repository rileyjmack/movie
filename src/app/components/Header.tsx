import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <p className="hover:text-gray-300 transition-colors">
              Guess The Actor
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="https://github.com/rileyjmack">
                <p className="hover:text-gray-300 transition-colors">GitHub</p>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/riley-james-mack/">
                <p className="hover:text-gray-300 transition-colors">
                  LinkedIn
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:text-gray-300 transition-colors">Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
