import Header from "@/components/Header/Header";
import HGrid from "@/components/HGrid/HGrid";
import type { Metadata } from "next";
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
        <section className="bg-second-background py-11 px-4 big-tablet:p-11">
          <h2 className="text-center text-[2.1rem] font-medium mb-11">
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
        </section>
      </article>
    </>
  );
};

export default Candidats;
