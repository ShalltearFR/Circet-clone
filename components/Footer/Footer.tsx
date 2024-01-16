import Link from "next/link";
import Flex from "../StyledElement/Flex";
import { Div, P, Ul } from "../StyledElement/StyledElement";

const Footer: React.FC = () => {
  return (
    <footer className={"mx-auto py-12 text-tertiary max-w-7xl"}>
      <Div
        md={
          "md:flex md:flex-shrink-0 md:mx-5 md:border-b md:border-blue-gray-900"
        }
      >
        <img src="/img/Nav/logo.webp" className="mx-auto md:ml-0" />
        <Flex xs={"justify-center gap-11"} md={"md:h-5 md:my-auto"}>
          <img src="/img/Footer/facebook.webp" />
          <img src="/img/Footer/twitter.webp" />
          <img src="/img/Footer/instagram.webp" />
          <img src="/img/Footer/youtube.webp" />
        </Flex>
      </Div>

      <Div md={"md:flex md:px-5"}>
        <Ul
          xs="flex flex-wrap mx-auto pt-6 justify-center hover:underline text-xs font-semibold w-2/3 gap-x-14 gap-y-3"
          md={"md:justify-start md:ml-3"}
        >
          <li>
            <Link href={"/plan-du-site"}>Plan du site</Link>
          </li>
          <li>
            <Link href={"/mentions-legales"}>Mentions légales</Link>
          </li>
          <li>
            <Link href={"/politique-de-confidentialite"}>
              Politique de confidentialité
            </Link>
          </li>
          <li>
            <Link href={"/politique-relative-aux-cookies"}>
              Politique relative aux cookies
            </Link>
          </li>
          <li>
            <Link href={"/credits"}>Credits</Link>
          </li>
        </Ul>
        <P xs="mt-4 text-center text-[10px]" md={"md:text-xs md:font-semibold"}>
          © 2024 Circet. Tous droits réservés.
        </P>
      </Div>
    </footer>
  );
};

export default Footer;
