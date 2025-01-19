"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`py-2.5 px-4 fixed w-full z-50 transition-all duration-300 ease-in-out text-white ${
          isScrolled ? "bg-indigo-900 shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href={"/"}>
            <p className="text-2xl md:text-3xl font-bold underline">treXiti</p>
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="#services"
                className="hover:text-purple-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="hover:text-purple-300 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-purple-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="hover:text-purple-300 transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-purple-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              className="text-purple-500 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* Add padding to the main content */}
      <div className="pt-[72px] md:pt-[96px]"></div>
    </>
  );
};

export default Header;
