/* eslint-disable @next/next/no-img-element */
import { Tailwindest } from "tailwindest";

interface ParagraphData {
  imageSrc: string;
  title: string;
  desc: string;
}

interface Colors {
  /**
   * @param title - Couleur tailwind (couleur custom donne une erreur mais n'empeche pas l'execution)
   * @param desc  - Couleur tailwind (couleur custom donne une erreur mais n'empeche pas l'execution)
  */
  title: Tailwindest["color"];
  desc: Tailwindest["color"];
}

interface HGridProps {
  background?: Tailwindest["backgroundColor"];
  data: ParagraphData[];
  colors: Colors;
}

const HGrid: React.FC<HGridProps> = ({ background, data, colors }) => {
  return (
    <div
      className={`grid tablet:grid-flow-col big-tablet:text-justify laptop:w-3/4 mx-auto gap-y-11 tablet:gap-y-0  ${
        background ? background : ""
      }`}
    >
      {data.map((el) => {
        return (
          <div
            key={crypto.randomUUID()}
            className={`grid tablet:grid-cols-[33%_1fr] grid-flow-col big-tablet:grid-cols-1 big-tablet:grid-flow-row px-4 laptop:px-4`}
          >
            <img
              src={el.imageSrc}
              alt=""
              className="tablet:mx-auto big-tablet:mb-5"
            />
            <div className="flex flex-col tablet:ml-5">
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
