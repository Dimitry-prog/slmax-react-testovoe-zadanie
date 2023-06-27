import React from 'react';
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="p-4 sticky top-0 bg-slate-600 drop-shadow-xl z-10">
      <nav className="mx-auto flex flex-col sm:flex-row gap-2 items-center justify-between">
        <h1 className="grid place-content-center text-white text-3xl font-bold">
          <Link href="/" className="text-white/90 no-underline hover:text-white">Dimitry 🏡</Link>
        </h1>

        <Link href="/products" className="dark:text-white/90 no-underline hover:text-white">Products</Link>

        <ul className="m-0 p-0 flex gap-4 justify-center text-white text-4xl lg:text-5xl list-none">
          <li className="p-0 m-0">
            <Link href="https://github.com/Dimitry-prog"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/90 no-underline hover:text-white">
              <FaGithub/>
            </Link>
          </li>
          <li className="p-0 m-0">
            <Link href="https://t.me/Dmitry_Myt"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/90 no-underline hover:text-white">
              <FaTelegram/>
            </Link>
          </li>
          <li className="p-0 m-0">
            <Link href="mailto:kfifa3@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/90 no-underline hover:text-white">
              <MdEmail/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;