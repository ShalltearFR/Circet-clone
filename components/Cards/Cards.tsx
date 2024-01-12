import React from "react";
import { Tw } from "@/types/tailwindest";
import Flex from "../StyledElement/Flex";
import { Div, H3, P } from "../StyledElement/StyledElement";
import Link from "next/link";

interface ParagraphData {
  /**
   * @param imageSrc - Lien image (img)
   * @param title    - Nom du titre (h3)
   * @param href     - Definie une url (h3)
   * @param desc     - Texte (p)
   */
  imageSrc: string;
  title: string;
  href?: string;
  desc: string;
}

interface Colors {
  /**
   * @param title - Couleur tailwind
   * @param desc  - Couleur tailwind
   */
  title: Tw["color"] | string;
  desc: Tw["color"] | string;
}

interface CardsProps {
  /**
   * @param alternative - Propose une version responsive alternative
   */
  background?: Tw["backgroundColor"];
  data: ParagraphData[];
  colors: Colors;
  alternative?: boolean;
}

interface TitleComponentProps {
  href?: string;
  children: React.ReactNode;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ href, children }) =>
  href ? (
    <Link href={href}>{children}</Link>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

const Cards: React.FC<CardsProps> = ({
  background,
  data,
  colors,
  alternative,
}) => {
  const commonTitleProps = {
    xs: `text-xl font-semibold mb-[6px] ${colors.title}`,
    md: "md:text-center",
  };

  return (
    <Div
      xs={`grid gap-y-11 gap-x-4 ${alternative ? "w-full" : "mx-auto"} ${
        background ? background : ""
      }`}
      md="md:grid-cols-3 md:text-justify md:gap-y-0"
      lg={!alternative ? "lg:w-5/6" : ""}
    >
      {data.map((el) => (
        <Div
          key={crypto.randomUUID()}
          xs={
            alternative
              ? "text-center flex flex-col"
              : "grid grid-cols-[minmax(auto,33%)_1fr] gap-x-5"
          }
          md={!alternative ? "md:flex md:flex-col" : ""}
        >
          <img
            src={el.imageSrc}
            className={`sm:mx-auto mb-5 ${alternative ? "mx-auto" : ""}`}
          />
          <Flex column xs={`justify-start`}>
            <TitleComponent href={el.href}>
              <H3 {...commonTitleProps}>{el.title}</H3>
            </TitleComponent>

            <P xs={`text-sm leading-6 ${colors.desc}`} md="md:text-center">
              {el.desc}
            </P>
          </Flex>
        </Div>
      ))}
    </Div>
  );
};

export default Cards;