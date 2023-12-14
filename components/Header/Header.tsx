/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import MiniNav from "./MiniNav";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const handleHamburger = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <header className="w-[1240px] h-[133px] border-white border-2 mx-auto">
      <div className=" w-[365px] h-[58px] ml-auto">
        <div className="grid grid-cols-4 rounded-b-md h-full w-full overflow-hidden">
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
            href={`${pathname}#`}
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
            <span className="my-auto text-white text-xs font-medium">
              International
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[132px] h-[39px] items-center">
        <button
          className="w-[18px] h-[18px]"
          onClick={handleHamburger}
        >
          <img className="mx-auto w-[18px] h-[18px]" src="/img/header/hamburger.webp" alt="" />
        </button>
        <div className="w-[114px] h-[18px] ml-[3rem] flex gap-3 items-center">
          <img className="w-[14px] h-[14px]" src="/img/header/mail.webp"alt="" />
          <span className="text-primary text-sm">Contact</span>
        </div>
      </div>

      <Link href={"/"} className="left-8">
        <img src="/img/header/logo.webp" width={112} height={67} alt="" />
      </Link>
    </header>
  );
};

export default Header;
