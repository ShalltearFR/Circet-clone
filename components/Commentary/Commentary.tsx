import Link from "next/link";
import Flex from "../Flex/Flex";

interface CommentaryProps {
  image: { src: string; href: string; blank: boolean };
  desc: string;
  source: { name: string; job: string };
  other: string;
}
const Commentary: React.FC<CommentaryProps> = ({
  image,
  desc,
  source,
  other,
}) => {
  return (
    <Flex
      column
      className={
        `bg-commentary text-secondary p-8 rounded-xl mx-auto items-center ` +
        `big-tablet:px-8 big-tablet:max-w-[620px] big-tablet:flex-row big-tablet:rounded-full`
      }
    >
      <div className="mb-5 big-tablet:mb-0 flex-shrink-0 relative ">
        <img
          src="/img/Candidats/quotes.png"
          className="absolute left-20 bottom-28"
        />
        <img
          src="/img/Candidats/youtube.png"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        />
        <Link href={image.href} target={image.blank ? "_blank" : "_self"}>
          <img
            src="/img/Candidats/conductrice_de_travaux.webp"
            className="rounded-full m-auto w-full h-auto z-10"
          />
        </Link>
      </div>
      <div className="big-tablet:ml-3 laptop:ml-7">
        <blockquote className="mb-3">{desc}</blockquote>
        <div className="text-sm">
          <span>{source.name}, </span>
          <span className="font-semibold">{source.job}</span>
        </div>
        <p className="text-sm italic">{other}</p>
      </div>
    </Flex>
  );
};

export default Commentary;
