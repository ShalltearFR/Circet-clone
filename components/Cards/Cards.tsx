/* eslint-disable @next/next/no-img-element */
import { Tw } from "@/types/tailwindest";
import Flex from "../Flex/Flex";

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
  title: Tw["color"];
  desc: Tw["color"];
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

const Cards: React.FC<CardsProps> = ({
  background,
  data,
  colors,
  alternative,
}) => {
  return (
    <div
      className={`grid gap-y-11 gap-x-4 big-tablet:grid-cols-3 big-tablet:text-justify big-tablet:gap-y-0 ${
        background ? background : ""
      } ${alternative ? "w-full" : "laptop:w-5/6 mx-auto"}`}
    >
      {data.map((el) => (
        <div
          key={crypto.randomUUID()}
          className={`${
            alternative
              ? "text-center flex flex-col"
              : "grid grid-cols-[minmax(auto,33%)_1fr] big-tablet:flex big-tablet:flex-col gap-x-5"
          }`}
        >
          <img
            src={el.imageSrc}
            className={`tablet:mx-auto big-tablet:mb-5 ${
              alternative ? "mx-auto" : ""
            }`}
          />
          <Flex column className={`justify-start ${alternative ? "" : ""}`}>
            <h3
              className={`big-tablet:text-center text-[1.5rem] text-xl font-semibold mb-[6px] ${colors.title}`}
            >
              {el.title}
            </h3>
            <p
              className={`big-tablet:text-center text-sm leading-6 ${colors.desc}`}
            >
              {el.desc}
            </p>
          </Flex>
        </div>
      ))}
    </div>
  );
};

export default Cards;
