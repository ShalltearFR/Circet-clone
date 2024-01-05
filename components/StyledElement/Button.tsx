import Link from "next/link";
import { StyledElementProps } from "./StyledElement";
import { Tw } from "@/types/tailwindest";

type TailwindClassName = Tw[keyof Tw];

type ButtonProps = {
  href?: string;
  imgSrc?: string;
  background: TailwindClassName | string;
  textColor: TailwindClassName | string;
} & StyledElementProps;

const Button: React.FC<ButtonProps> = ({
  href,
  imgSrc,
  children,
  background,
  textColor,
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center mx-auto w-full rounded-full px-6 py-3 ${background} md:w-3/4`}
    >
      <span className={`${imgSrc ? "mr-3 " : ""}text-lg font-semibold ${textColor}`}>
        {href ? <Link href={href}>{children}</Link> : children}
      </span>
      {imgSrc ? <img src={imgSrc} /> : ""}
    </button>
  );
};

export default Button;
