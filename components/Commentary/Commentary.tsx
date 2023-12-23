import Link from "next/link";
import Flex from "../StyledElement/Flex";
import { Div } from "../StyledElement/StyledElement";

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
      xs="bg-commentary text-secondary p-8 rounded-xl mx-auto items-center"
      md="md:px-8 md:max-w-[620px] md:flex-row md:rounded-full"
    >
      <Div xs="mb-5 flex-shrink-0 relative" md="md:mb-0">
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
      </Div>
      <Div md="md:ml-3" lg="lg:ml-7">
        <blockquote className="mb-3">{desc}</blockquote>
        <div className="text-sm">
          <span>{source.name}, </span>
          <span className="font-semibold">{source.job}</span>
        </div>
        <p className="text-sm italic">{other}</p>
      </Div>
    </Flex>
  );
};

export default Commentary;
