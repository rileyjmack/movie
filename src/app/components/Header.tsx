import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        Your goal is to try to guess the actor in as few guesses as possible.
        You will be given one movie at a time and you must guess which actor is
        in all of the listed movies. Fewer guesses grants you more stars. If you
        don&apost know you can always skip.
      </Modal>
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
                  <p className="hover:text-gray-300 transition-colors">
                    GitHub
                  </p>
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
                <button
                  onClick={openModal}
                  className="hover:text-gray-300 transition-colors"
                >
                  Rules
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
