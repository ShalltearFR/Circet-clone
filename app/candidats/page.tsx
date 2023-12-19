import Commentary from "@/components/Commentary/Commentary";
import Header from "@/components/Header/Header";
import HGrid from "@/components/HGrid/HGrid";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Carrière - Circet Clone",
  description: "Description page candidats",
};

const Candidats: React.FC = () => {
  return (
    <>
      <Header
        mobileImg="/img/Candidats/header_mobile.webp"
        tabletImg="/img/Candidats/header_tablet.webp"
        desc="Ceci n'est pas le site officiel de Circet France"
      />
      <article>
        <section className="bg-second-background py-11 px-4 big-tablet:p-11 rounded-xl">
          <h2 className="text-center text-[2.2rem] font-medium mb-11">
            Circet France en bref
          </h2>
          <HGrid
            colors={{ title: "text-accent", desc: "text-black" }}
            data={[
              {
                imageSrc: "/img/Candidats/activite_picto.webp",
                title: "Nos Activités",
                desc: "Numéro 1 des services aux infrastructures télécoms fixes et mobiles, Circet France accompagne également la transition énergétique.",
              },
              {
                imageSrc: "/img/Candidats/mission_picto.webp",
                title: "Notre mission",
                desc: "Efficacité. Excellence. Esprit d'entreprise. Responsabilité. Tels sont les mots d'ordre ancrés dans l'ADN de Circet France, au service de la satisfaction client.",
              },
              {
                imageSrc: "/img/Candidats/chiffres_picto.webp",
                title: "Nos chiffres",
                desc: "En 2022, Circet France c'est 4100 collaboratrices et collaborateurs, 80 implantations et 1,186 milliard d'euros de chiffre d'affaires.",
              },
            ]}
          />

          <p className="mt-12 text-center underline underline-offset-2 hover:no-underline">
            <Link href={"/a-propos"} className="py-2 px-6">
              <img
                src="/img/Candidats/right-arrow.webp"
                className="inline mr-2"
              />
              <span className="align-middle text-sm font-bold">
                En savoir plus sur Circet France
              </span>
            </Link>
          </p>
        </section>

        <section className="mt-16 px-8 desktop:px-36">
          <h2 className="text-center text-primary text-[2.2rem] font-medium mb-11">
            Pourquoi rejoindre Circet France ?
          </h2>
          <HGrid
            alternative
            colors={{ title: "text-primary", desc: "text-primary" }}
            data={[
              {
                imageSrc: "/img/Candidats/culture_entrepreneuriale.webp",
                title: "Une culture entrepreneuriale",
                desc: "Conciliez autonomie et responsabilisation dans une entreprise solide et conquérante au service des grands opérateurs nationaux.",
              },
              {
                imageSrc: "/img/Candidats/evolution.webp",
                title: "Des perspectives d'évolution",
                desc: "Bénéficiez de réelles opportunités de carrière dans une entreprise qui reconnaît et valorise le travail, l'engagement et l'impact.",
              },
              {
                imageSrc: "/img/Candidats/packages_salariaux.webp",
                title: "Des packages salariaux attractifs",
                desc: "Rejoignez une entreprise qui sait récompenser l'engagement et la performance individuelle et collective.",
              },
            ]}
          />

          <div className="mt-16">
            <Commentary
              image={{
                src: "/img/Candidats/conductrice_de_travaux.webp",
                href: "https://www.youtube.com/watch?v=KaZlAXCghyQ",
                blank: true,
              }}
              desc={`Circet France valorise l'engagement de ses équipes en leur offrant des opportunités d'évolution tout au long de leur carrière.`}
              source={{ name: "Mélanie", job: "Conductrice de travaux" }}
              other="Eysines, Gironde"
            />
          </div>
        </section>
      </article>
    </>
  );
};

export default Candidats;
