/* eslint-disable @next/next/no-img-element */
import { Tw } from "@/types/tailwindest";

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
  className={`grid grid-rows-1 gap-x-3 big-tablet:grid-cols-3 big-tablet:text-justify gap-y-11 big-tablet:gap-y-0 ${
    background ? background : ""
  } ${alternative ? "w-full" : "laptop:w-5/6 mx-auto"}`}
>
  {data.map((el) => (
    <div
      key={crypto.randomUUID()}
      className={`${
        alternative ? "text-center flex flex-col" : "grid grid-cols-[minmax(auto,33%)_1fr] big-tablet:flex big-tablet:flex-col gap-x-5"
      }`}
    >
      <img
        src={el.imageSrc}
        className={`tablet:mx-auto big-tablet:mb-5 ${alternative ? "mx-auto" : ""}`}
      />
      <div
        className={`flex flex-col justify-start ${alternative ? "" : ""}`}
      >
        <h3
          className={`big-tablet:text-center text-[1.5rem] font-medium mb-[6px] ${colors.title}`}
        >
          {el.title}
        </h3>
        <p
          className={`big-tablet:text-center font-thin ${colors.desc}`}
        >
          {el.desc}
        </p>
      </div>
    </div>
  ))}
</div>

  );
};

export default HGrid;
