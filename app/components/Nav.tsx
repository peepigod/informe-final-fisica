"use client";

import Logo from "app/components/icons/Logo";
import { Link } from "./common/Link";

export const Nav = () => {
  return (
    <nav
      className={'fixed w-full z-30 bg-slate-900/20 backdrop-blur-sm flex justify-center items-center h-16 transition-all duration-300'}
    >
      <div className="relative flex w-full max-w-6xl mx-auto justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-1 cursor-pointer">
          <Logo />
          <h1 className="text-xl md:text-2xl text-white font-semibold transition-all duration-300">
            LosMasomaniaticos
          </h1>
        </a>
        <div className="hidden md:flex items-center gap-5 h-full">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8gSmh5h5rkZSPwAOAuY01BwPT98-Ijf1oW4N5iH0YwwdAFA/viewform?usp=sf_link"
            className="transition-all duration-300 hover:scale-105"
          >
            Votar por el más pisado
          </Link>
        </div>
      </div>
      <div
        className={`absolute top-16 left-0 w-full bg-slate-900 p-4 hidden transition-all duration-300 ease-in-out`}
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSe8gSmh5h5rkZSPwAOAuY01BwPT98-Ijf1oW4N5iH0YwwdAFA/viewform?usp=sf_link"
          className="transition-all duration-300 hover:scale-105"
        >
          Votar por el más pisado
        </Link>
      </div>
    </nav>
  );
};
