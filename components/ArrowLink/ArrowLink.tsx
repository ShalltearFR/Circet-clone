import Link from "next/link";
import Flex from "../StyledElement/Flex";
import { Tw } from "@/types/tailwindest";

interface ArrowLinkProps {
  arrow: "orange" | "black" | "white";
  textColor: Tw["color"];
  href: string;
  children: React.ReactNode;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  arrow,
  textColor,
  href,
  children,
}) => {
  let arrowSrc: string;
  switch (arrow) {
    case "orange":
      arrowSrc = "/img/Arrows/orange2-arrow.webp";
      break;
    case "black":
      arrowSrc = "/img/Arrows/black-arrow.svg";
      break;
    case "white":
      arrowSrc = "/img/Arrows/white-arrow.svg";
      break;
  }

  return (
    <Flex
      xs={`items-center underline text-sm font-semibold gap-3 justify-center mt-8 hover:no-underline ${textColor}`}
    >
      <img src={arrowSrc} />
      <Link href={href}>{children}</Link>
    </Flex>
  );
};

export default ArrowLink;