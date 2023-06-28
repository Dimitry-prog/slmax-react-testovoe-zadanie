import Link from "next/link";
import React from "react";

const ProductsNavbar = () => {
  return (
    <nav className="p-4 border-b">
      <ul className="flex flex-col sm:flex-row gap-2 justify-center items-center">
        <li>
          <Link href="/products/addProduct" className="dark:text-white/90 no-underline hover:text-white">Add
            product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProductsNavbar;