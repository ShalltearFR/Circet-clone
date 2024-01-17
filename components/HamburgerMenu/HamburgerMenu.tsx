"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Div, Nav } from "../StyledElement/StyledElement";
import hamburgerData from "@/annexes/hamburgerMenu.json";
import Flex from "../StyledElement/Flex";
import { usePathname } from "next/navigation";

interface HamburgerMenuProps {
  isOpen: boolean;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  handleMenu,
}) => {
  const currentRoute = usePathname();

  const pClassName = `text-xl text-accent`;
  const liClassName = `py-1`;

  const setActiveClassName = (path: string) => {
    if (path === currentRoute) {
      return " underline underline-offset-4";
    }
    return "";
  };

  return (
    <Div
      xs={`fixed z-50 w-full h-screen overflow-y-auto bg-hamburger pb-20 transform transition-transform duration-500 ${
        isOpen ? "" : "-translate-x-full"
      }`}
      xl={"xl:w-1/3"}
    >
      <Nav
        xs="text-primary mr-24 ml-5 text-lg"
        xl={"xl:mr-5 xl:ml-auto xl:w-2/3"}
      >
        <img
          src="/img/Nav/cross.webp"
          className="ml-auto mt-5"
          onClick={handleMenu}
        />
        <div>
          <input
            className="text-secondary placeholder:text-secondary placeholder:italic h-12 w-full rounded-full px-5 py-3 mt-8"
            placeholder="Métier, mots clés, activités..."
          />
        </div>
        <Flex column xs={"gap-6 mt-10"} onClick={handleMenu}>
          <div>
            <p className={pClassName + setActiveClassName("/candidats")}>
              <Link href={"/candidats"}>Candidats</Link>
            </p>
            <ul>
              {hamburgerData.candidats.map((el) => (
                <li key={crypto.randomUUID()} className={liClassName + setActiveClassName(el.href)}>
                  <Link href={el.href}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={pClassName + setActiveClassName("/clients")}>
              <Link href={"/clients"}>Clients</Link>
            </p>
            <ul>
              {hamburgerData.clients.map((el) => (
                <li key={crypto.randomUUID()} className={liClassName + setActiveClassName(el.href)}>
                  <Link href={el.href}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={pClassName + setActiveClassName("/fournisseurs")}>
              <Link href={"/fournisseurs"}>Fournisseurs</Link>
            </p>
            <ul>
              {hamburgerData.fournisseurs.map((el) => (
                <li key={crypto.randomUUID()} className={liClassName + setActiveClassName(el.href)}>
                  <Link href={el.href}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={pClassName + setActiveClassName("/a-propos")}>
              <Link href={"/a-propos"}>A propos</Link>
            </p>
            <ul>
              {hamburgerData.aPropos.map((el) => (
                <li key={crypto.randomUUID()} className={liClassName + setActiveClassName(el.href)}>
                  <Link href={el.href}>{el.name}</Link>
                  {el.sub && (
                    <p>
                      <Link href={el.sub.href} className="pl-5 text-sm">
                        {el.sub.name}
                      </Link>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={pClassName + setActiveClassName("/actualites")}>
              <Link href={"/actualites"}>Actualités</Link>
            </p>
          </div>
          <div>
            <p className={pClassName + setActiveClassName("/contact")}>
              <Link href={"/contact"}>Contact</Link>
            </p>
          </div>
          <div>
            <p className={pClassName + setActiveClassName("/signalement")}>
              <Link href={"/signalement"}>Signalement</Link>
            </p>
          </div>
          <div>
            <p className={pClassName + setActiveClassName("/implantations")}>
              <Link href={"/implantations"}>Implantations</Link>
            </p>
          </div>
        </Flex>
      </Nav>
    </Div>
  );
};

export default HamburgerMenu;
