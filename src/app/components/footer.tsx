import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container py-20">
      <div className="flex flex-col gap-8 lg:flex-row justify-between">
        <div className="top lg:w-4/12">
          <Image
            src={"/images/logo.png"}
            width={280}
            height={91}
            alt="Logo"
            className=""
          />
          <p className="italic text-sm my-5">
            Fazendo história desde 2004. Agora com um novo rosto e novas
            ofertas educativas.
          </p>
          <div className="socials flex gap-2">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#5E5E5E"
                  d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"
                />
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#5E5E5E"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Z"
                />
                <path
                  fill="#5E5E5E"
                  fillRule="evenodd"
                  d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082ZM17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#5E5E5E"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="links flex flex-col lg:flex-row gap-3 ">
          <Link href={"/"}>INÍCIO</Link>
          <Link href={"/"}>SOBRE NÓS</Link>
          <Link href={"/"}>SECRETARIA</Link>
          <Link href={"/"}>OFERTA EDUCATIVA</Link>
          <Link href={"/"}>INFORMAÇÕES</Link>
          <Link href={"/"}>CONTACTOS</Link>
        </div>
      </div>
      <p className="text-sm mt-8">
        Copyright ©2023 Leonardo Da Vinci International School . All rights
        reserved. Designed by Digital Vague
      </p>
    </footer>
  );
};

export default Footer;
