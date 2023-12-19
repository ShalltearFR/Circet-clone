/* eslint-disable @next/next/no-img-element */
import { Tw } from "@/types/tailwindest";

interface ParagraphData {
  /**
   * @param imageSrc - Lien image (img)
   * @param title    - Nom du titre (h3)
   * @param desc     - Texte (p)
   */
  imageSrc: string;
  title: string;
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

interface HGridProps {
  /**
   * @param alternative - Propose une version responsive alternative
   */
  background?: Tw["backgroundColor"];
  data: ParagraphData[];
  colors: Colors;
  alternative?: boolean;
}

const HGrid: React.FC<HGridProps> = ({
  background,
  data,
  colors,
  alternative,
}) => {
  return (
    <div
      className={`grid tablet:grid-cols-3 big-tablet:text-justify gap-y-11 tablet:gap-y-0 ${
        background ? background : ""
      }
      ${alternative ? "w-full" : "laptop:w-5/6 mx-auto"}`}
    >
      {data.map((el) => {
        return (
          <div
            key={crypto.randomUUID()}
            className={`grid big-tablet:grid-cols-1 big-tablet:grid-rows-2 px-4 laptop:px-4 ${
              alternative
                ? "text-center tablet:grid-rows-[33%_1fr]"
                : "grid-flow-col tablet:grid-cols-[33%_1fr]"
            }`}
          >
            <img
              src={el.imageSrc}
              className={`tablet:mx-auto mobile:h-auto mobile:max-w-full mobile:w-auto mobile:max-h-full big-tablet:mb-5 ${
                alternative ? "mx-auto" : ""
              }`}
            />
            <div
              className={`flex flex-col ${
                alternative ? "" : "tablet:ml-5 big-tablet:ml-0"
              }`}
            >
              <h3
                className={`big-tablet:text-center text-[1.5rem] font-medium mb-[6px] ${colors.title}`}
              >
                {el.title}
              </h3>
              <p
                className={`flex-grow big-tablet:text-center font-thin ${colors.desc}`}
              >
                {el.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HGrid;
