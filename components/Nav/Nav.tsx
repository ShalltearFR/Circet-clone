/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import MiniNav from "./MiniNav";
import { usePathname } from "next/navigation";
import { v4 as uuid } from "uuid";

const Nav: React.FC = () => {
  const pathname = usePathname();

  const handleHamburger = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const navLink = [
    {
      href: "/candidats",
      name: "Candidats",
    },
    {
      href: "/clients",
      name: "Clients",
    },
    {
      href: "/fournisseurs",
      name: "Fournisseurs",
    },
    {
      href: "/a-propos",
      name: "À Propos",
    },
  ];

  return (
    <nav className="border-white/10 border-b-[1.2px] mx-auto relative mobile:w-full desktop:w-[1240px] desktop:h-[130px] mobile:h-[190px]">
      <div className="h-[60px] desktop:w-[365px] desktop:ml-auto mobile:w-full">
        <div className="grid grid-cols-4 h-full w-full desktop:rounded-b-md overflow-hidden">
          <MiniNav
            href={"/green-it"}
            img={"/img/header/leaf.webp"}
            imgSize={{ width: "10px", height: "10px" }}
            desc={"Green IT"}
          />
          <MiniNav
            href={"/accessibilite"}
            img={"/img/header/eye.webp"}
            imgSize={{ width: "20px", height: "14px" }}
            desc={"Accessibilité"}
          />
          <MiniNav
            href={`/${pathname}#`}
            img={"/img/header/cookie.webp"}
            imgSize={{ width: "13px", height: "13px" }}
            desc={"Cookies"}
          />
          <a
            href={"https://www.circet.com/"}
            className="grid grid-rows-[30px,20px] items-end justify-center h-full bg-accent ml-2"
            target="_blank"
          >
            <img
              className="mx-auto"
              src={"/img/header/building.webp"}
              width={"20px"}
              alt={""}
            />
            <span className="my-auto text-white text-sm font-semibold">
              International
            </span>
          </a>
        </div>
      </div>

      <Link
        href={"/"}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img src="/img/header/logo.webp" width={112} height={67} alt="" />
      </Link>

      <div className="w-[135px] h-[40px] absolute inset-0 flex items-center my-auto gap-7 mobile:ml-2 desktop:ml-0">
        <button
          className="w-[18px] h-[18px] flex-shrink-0"
          onClick={handleHamburger}
        >
          <img
            className="mx-auto w-[18px] h-[18px]"
            src="/img/header/hamburger.webp"
            alt=""
          />
        </button>
        <div className="w-[115px] h-[20px] gap-3 items-center mobile:hidden desktop:flex">
          <img
            className="w-[14px] h-[14px]"
            src="/img/header/mail.webp"
            alt=""
          />
          <span className="text-primary text-sm">Contact</span>
        </div>
      </div>

      <ul className="absolute inset-0 flex items-end justify-center gap-7 translate-y-[1px]">
        {navLink.map((link) => (
          <li
            key={uuid()}
            className={`pb-3 border-b-2 ${
              pathname === link.href
                ? "text-accent border-accent"
                : "text-white border-transparent hover:text-accent"
            }`}
          >
            <Link href={link.href}>
              <span className="text-md">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
