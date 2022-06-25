import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const handleTheme = () => {
    if (currentTheme === "dark") {
      return <BsSunFill size={20} onClick={() => setTheme("light")} />;
    } else {
      return (
        <BsMoonFill color="black" size={20} onClick={() => setTheme("dark")} />
      );
    }
  };
  return (
    <header className="w-screen bg-blue-500 dark:bg-blue-900 text-gray-100 dark:text-gray-300 shadow-lg dark:shadow-lg">
      <ul className="flex text-2xl font-serif">
        <li
          className={`ml-auto py-2 mx-3 cursor-pointer ${
            router.pathname === "/" ? "text-blue-900 dark:text-blue-500" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`py-2 mx-3 cursor-pointer ${
            router.pathname === "/contact"
              ? "text-blue-900 dark:text-blue-500"
              : ""
          }`}
        >
          <Link href="/contact">Contact Us</Link>
        </li>
        <li
          className={`py-2 mx-3 cursor-pointer ${
            router.pathname === "/about"
              ? "text-blue-900 dark:text-blue-500"
              : ""
          }`}
        >
          <Link href="/about">About Us</Link>
        </li>
        <li className="pt-4 mx-3 cursor-pointer">{handleTheme()}</li>
      </ul>
    </header>
  );
};

export default Navbar;
