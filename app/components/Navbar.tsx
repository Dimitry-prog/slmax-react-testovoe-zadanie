import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 border-b">
      <ul className="flex flex-col sm:flex-row gap-2 justify-center items-center">
        <li>
          <Link href="/products/addProduct" className="dark:text-white/90 no-underline hover:text-white">Add
            product</Link>
        </li>
        <li>
          <Link href="/products/changeProduct" className="dark:text-white/90 no-underline hover:text-white">Change
            product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;