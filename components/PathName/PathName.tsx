"use client";
import { usePathname } from "next/navigation";
import { Div } from "../StyledElement/StyledElement";

const PathName: React.FC = () => {
  const pathname = usePathname()
    .replaceAll("-", " ")
    .split("/")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" > ");

  return (
    <Div
      xs="ml-[35px] mt-[33px] mb-[10px] text-white text-xs"
      xl="xl:w-[1240px] xl:mx-auto xl:pl-8"
    >
      {`Accueil${pathname}`}
    </Div>
  );
};

export default PathName;