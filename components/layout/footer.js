import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline Section */}
        <div>
          <Link href={"/"}>
            <Image
              width={90}
              height={90}
              className="h-auto object-cover mb-4"
              src={"/logo.webp"}
              alt="Trexiti Logo"
            />
          </Link>
          <p className="mb-4 text-sm leading-relaxed">
            Bringing Caribbean innovation to the world, one pixel at a time.
          </p>
          <p className="text-sm">© 2025 Trexiti. All rights reserved.</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-300">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/#services"
                className="hover:text-purple-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="hover:text-purple-400 transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-300">
            Connect With Us
          </h4>
          <p className="mb-3">
            <span className="font-bold">Location:</span> Montego Bay, Jamaica
          </p>
          <p className="mb-3">
            <span className="font-bold">Email:</span>{" "}
            <Link
              href="mailto:hello@trexiti.com"
              className="hover:text-purple-400 transition-colors"
            >
              hello@trexiti.com
            </Link>
          </p>
          <p>
            <span className="font-bold">Phone:</span>{" "}
            <Link
              href="tel:+18764783893"
              className="hover:text-purple-400 transition-colors"
            >
              +1 (876) 478-3893
            </Link>
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 text-center border-t border-purple-700 pt-6">
        <p className="mb-4">Follow us on social media:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com/trexiti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.876v-6.987h-2.54v-2.89h2.54v-2.206c0-2.51 1.493-3.89 3.775-3.89 1.094 0 2.238.195 2.238.195v2.464h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12z" />
            </svg>
          </a>
          <a
            href="https://x.com/trexiti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.532A8.353 8.353 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646A4.12 4.12 0 0 0 21.447 4.5a8.272 8.272 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.74A11.648 11.648 0 0 1 3.337 4.88a4.106 4.106 0 0 0 1.27 5.482 4.073 4.073 0 0 1-1.858-.514v.052a4.108 4.108 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.852.07 4.108 4.108 0 0 0 3.834 2.85A8.232 8.232 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.843" />
            </svg>
          </a>
          <Link
            href="https://instagram.com/trexiti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 2C4.467 2 2 4.467 2 7.5v9C2 19.533 4.467 22 7.5 22h9c3.033 0 5.5-2.467 5.5-5.5v-9C22 4.467 19.533 2 16.5 2h-9zm0 2h9c1.933 0 3.5 1.567 3.5 3.5v9c0 1.933-1.567 3.5-3.5 3.5h-9C5.567 20 4 18.433 4 16.5v-9C4 5.567 5.567 4 7.5 4zm12 1.25a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
