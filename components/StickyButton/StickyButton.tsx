"use client";
import Link from "next/link";
import Flex from "../StyledElement/Flex";
import { useState } from "react";

interface StickyButtonProps {
  href: string;
  children: React.ReactNode;
}

const StickyButton: React.FC<StickyButtonProps> = ({ href, children }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="sticky mt-10 bottom-2 lg:bottom-3/4 z-40">
      <Flex
        xs="mx-8 justify-center text-primary font-semibold bg-accent border-accent border rounded-full"
        sm={"transition-all hover:bg-primary hover:text-accent"}
        lg={"lg:w-36 lg:ml-auto lg:mr-0 lg:rounded-e-none"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={href} className="flex gap-3 items-center py-2 px-6">
          <span>{children}</span>
          <img
            src={
              isHovered
                ? "/img/Arrows/orange2-arrow.webp"
                : "/img/Arrows/white-arrow.svg"
            }
            alt="Image"
            className="h-4"
          />
        </Link>
      </Flex>
    </div>
  );
};

export default StickyButton;
