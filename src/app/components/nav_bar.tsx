"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <nav className=" lg:hidden">
        <div className="container mt-6 h-[5vh] flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={140}
              height={48}
              alt="Logo"
              priority
              className="w-auto h-auto"
            />
          </Link>
          <div className="flex gap-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                />
              </svg>
            </button>

            <Hamburger
              size={24}
              rounded
              onToggle={handleNavClick}
              easing="ease-in"
            />
          </div>
        </div>
        <hr className="mt-6" />
        <div
          className={`flex h-[50vh] gap-6 flex-col justify-center items-center absolute w-full bg-white ease-in duration-300 ${
            navOpen ? "left-0" : "-left-full"
          }`}
        >
          <Link href="/">INÍCIO</Link>
          <Link href="/">SOBRE NÓS</Link>
          <Link href="/">SECRETARIA</Link>
          <Link href="/">OFERTA EDUCATIVA</Link>
          <Link href="/">INFORMAÇÕES</Link>
          <Link href="/">CONTACTOS</Link>
          {/* TODO: add the login and register */}
          {/* <div className="flex gap-12">
          <Link href="/login">LOGIN</Link>
          <Link href="/register">SIGN UP</Link>
        </div> */}
        </div>
      </nav>

      <nav className="hidden container lg:block">
        <div className="flex justify-between items-center mt-10 mb-8">
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M232 128v80a40 40 0 0 1-40 40h-56a8 8 0 0 1 0-16h56a24 24 0 0 0 24-24h-24a24 24 0 0 1-24-24v-40a24 24 0 0 1 24-24h23.65A88 88 0 0 0 66 65.54A87.29 87.29 0 0 0 40.36 120H64a24 24 0 0 1 24 24v40a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24v-56a104.11 104.11 0 0 1 177.89-73.34A103.41 103.41 0 0 1 232 128Z"
              />
            </svg>
            <p>(+244) 945 605 043</p>
          </div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={171}
              height={56}
              alt="Logo"
              priority
              className="w-[160px] h-auto"
            />
          </Link>
          <div className=" flex gap-4">
            <select name="language" id="language">
              <option value="portuguese">PT</option>
              <option value="english">EN</option>
            </select>
            <Link href="/">
              <div className=" flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12ZM76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52Z"
                  />
                </svg>
                <p>LOGIN</p>
              </div>
            </Link>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6 hover:w-[23px] hover:h-[23px] ease-in-out duration-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr className="mb-6" />
        <div className="flex gap-6 justify-center">
          <Link className="hover:text-gold ease-in-out duration-300" href="/">
            INÍCIO
          </Link>
          <Link className="hover:text-gold ease-in-out duration-300" href="/">
            SOBRE NÓS
          </Link>
          <Link className="hover:text-gold ease-in-out duration-300" href="/">
            SECRETARIA
          </Link>
          <Link className="hover:text-gold ease-in-out duration-300" href="/">
            OFERTA EDUCATIVA
          </Link>
          <Link className="hover:text-gold ease-in-out duration-300" href="/">
            INFORMAÇÕES
          </Link>
          <Link className="hover:text-gold ease-in-out duration-300" href="/">
            CONTACTOS
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
