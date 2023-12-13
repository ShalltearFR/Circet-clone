/* eslint-disable @next/next/no-img-element */
"use client";
import MiniNav from "./MiniNav";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="w-[1240px] h-[133px]">
      <div className=" ml-auto w-[365px] h-[58px]">
        <div className="flex rounded-b-lg h-full overflow-hidden">
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
            className="grid grid-rows-[30px,20px] items-end h-full bg-accent px-3 mx-2"
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
    </header>
  );
};

export default Header;
