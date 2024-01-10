"use client";
import { usePathname } from "next/navigation";

const PathName = () => {
  const pathname = usePathname()
    .replaceAll("-", " ")
    .split("/")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" > ");

  return (
    <div className="ml-[35px] mt-[33px] mb-[10px] text-white text-xs">{`Accueil${pathname}`}</div>
  );
};

export default PathName;
