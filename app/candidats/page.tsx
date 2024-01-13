/* eslint-disable react/no-unescaped-entities */
import Commentary from "@/components/Commentary/Commentary";
import HeaderImg from "@/components/HeaderImg/HeaderImg";
import Cards from "@/components/Cards/Cards";
import type { Metadata } from "next";
import Link from "next/link";
import Flex from "@/components/StyledElement/Flex";
import { Div, Section } from "@/components/StyledElement/StyledElement";
import SearchContainer from "@/components/Search/SearchContainer";
import Carousel from "@/components/Carousel/Carousel";

export const metadata: Metadata = {
  title: "Carrière - Circet Clone",
  description: "Description page candidats",
};

const Candidats: React.FC = () => {
  return (
    <>
      <Div xs="mx-auto" xl="xl:w-[1240px]">
        <HeaderImg
          mobileImg="/img/Candidats/header_mobile.webp"
          tabletImg="/img/Candidats/header_tablet.webp"
          desc="Ceci n'est pas le site officiel de Circet France"
        />
        <article>
          <Section
            xs="bg-second-background py-11 "
            md="md:p-11"
            xl="xl:rounded-xl"
          >
            <h2 className="text-secondary text-center text-[2rem] font-semibold mb-11">
              Circet France en bref
            </h2>
            <Cards
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

            <p className="mt-12 text-center text-secondary underline underline-offset-2 hover:no-underline">
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
          </Section>

          <Section xs="mt-16 px-8" xl="xl:px-36">
            <h2 className="text-center text-[2.2rem] font-medium mb-11">
              Pourquoi rejoindre Circet France ?
            </h2>
            <Cards
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

            <Div xs="mt-16">
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
            </Div>
          </Section>

          <Section
            xs="mt-16 bg-second-background py-11 px-4"
            md="md:p-11"
            xl="xl:rounded-xl"
          >
            <h2 className="text-center text-secondary text-[2.2rem] font-medium mb-4">
              Nos métiers
            </h2>
            <p className="text-secondary font-light text-lg mb-8 text-center">
              Étudiants, jeunes diplômés/actifs, profils expérimentés... Quelle
              que soit votre expérience, Circet France vous donne votre chance !
            </p>
            <Cards
              colors={{ title: "text-accent", desc: "text-black" }}
              data={[
                {
                  imageSrc: "/img/Candidats/CSM.webp",
                  title: "Réseaux télécoms",
                  desc: "Des métiers de terrain ou en agence, pour assurer le déploiement et la maintenance des infrastructures télécoms fixes et mobiles.",
                },
                {
                  imageSrc: "/img/Candidats/transition_energetique.webp",
                  title: "Transition énergétique",
                  desc: "De nouveaux métiers d'avenir, pour répondre aux besoins exponentiels en gestion durable de l'énergie et recharge de véhicules électriques.",
                },
                {
                  imageSrc: "/img/Candidats/IMG_7144.webp",
                  title: "Fonctions support",
                  desc: "Des fonctions métier ou transversales, pour accompagner les équipes opérationnelles dans leurs missions au quotidien.",
                },
              ]}
            />
          </Section>

          <Section xs="mt-16 w-full mx-auto px-8" xl="xl:w-4/5">
            <h2 className="text-4xl font-semibold mb-7">Formation</h2>
            <Flex column xs="gap-y-20" md="md:flex-row" xl="xl:gap-x-5">
              <div className="text-accent flex-1">
                <h3 className="text-3xl font-semibold text-center mx-auto mb-9 px-2">
                  {"Développer vos compétences au service de l'excellence"}
                </h3>
                <Flex
                  column
                  xs={
                    `text-2xl font-bold text-center ` +
                    `[&>*:nth-child(odd)]:text-primary [&>*:nth-child(odd)]:text-4xl ` +
                    `[&>*:nth-child(even)]:mb-5 [&>*:last-child]:!mb-0`
                  }
                >
                  <span>9</span>
                  <span>CENTRES DE FORMATION</span>
                  <span>43</span>
                  <span>EXPERTS MÉTIER</span>
                  <span>94 %</span>
                  <span>TAUX DE SATISFACTION 2022</span>
                </Flex>
              </div>

              <Flex column flex1 xs="gap-y-20">
                <img
                  src="/img/Candidats/Qualiopi.webp"
                  className="max-w-md mx-auto w-full"
                />
                <Link href={"candidats/formation"} className="mx-auto">
                  <span className="bg-accent text-sm font-bold px-6 py-3 m-auto text-center w-fit rounded-full">
                    En savoir plus sur la formation
                    <img
                      src="/img/Candidats/right-arrow-white.svg"
                      className="inline ml-1"
                    />
                  </span>
                </Link>
              </Flex>
            </Flex>
          </Section>

          <Section
            xs="mt-14 bg-fourth-background px-4 py-11"
            xl="xl:rounded-xl"
          >
            <SearchContainer />
          </Section>

          <Section xs="mt-14 text-center">
            <h2 className="text-3xl font-semibold mb-11">
              Nos offres à l'affiche
            </h2>
            <div className="w-full md:w-2/4 h-80 mx-auto">
              <Carousel
                data={[
                  {
                    imgSrc: "/img/Candidats/conducteur.webp",
                    desc: "Conducteur de travaux Radio (H/F)",
                    href: "/jobs/Jquy54MqiynBwut4",
                  },
                  {
                    imgSrc: "/img/Candidats/electricien.webp",
                    desc: "Electricien (H/F)",
                    href: "/jobs/pqxy54MqbynBw5t3",
                  },
                ]}
              />
              <div className="flex items-center underline text-sm font-semibold gap-3 justify-center mt-8 hover:no-underline">
                <img src="/img/Candidats/carousel-right-arrow.webp" />
                <Link href={"/candidats/offres"}>
                  Voir plus d'offres d'emploi
                </Link>
              </div>
            </div>
          </Section>

          <Section
            xs={"bg-second-background text-center mt-28 py-11"}
            xl="xl:rounded-xl"
          >
            <div className="text-accent text-xl font-semibold w-4/5 mx-auto">
              Aucune de nos offres actuelles ne correspond à votre recherche ?
            </div>
            <div className="flex items-center text-secondary underline text-sm font-semibold gap-3 justify-center mt-8 hover:no-underline">
              <img src="/img/Candidats/right-arrow-black.svg" />
              <Link href={"/candidats/Candidature-spontanee"}>
                Envoyer votre candidature spontanée
              </Link>
            </div>
          </Section>

          <Section xs={"mt-16 text-center px-5"}>
            <h2 className="text-3xl font-semibold mb-4">
              Environnement, Social & Gouvernance
            </h2>
            <p className="mb-8">
              Circet France se mobilise pour améliorer ses pratiques ESG et
              attirer les meilleurs potentiels.
            </p>

            <Cards
              alternative
              data={[
                {
                  imageSrc: "/img/Candidats/egalite_femmes_hommes.webp",
                  title: "Égalité professionnelle",
                  href: "/a-propos/Environnement-social-&-gouvernance",
                  desc: "Circet France est attachée à l'égalité professionnelle entre individus et exclut toute forme de discrimination envers les minorités quelles qu'elles soient. En 2022, l'entreprise obtient un score de 87/100 à l'index de l'égalité professionnelle femmes-hommes.",
                },
                {
                  imageSrc: "/img/Candidats/engagement solidaire.webp",
                  title: "Engagement solidaire",
                  href: "/a-propos/Environnement-social-&-gouvernance",
                  desc: "Avec le programme de mécénat de compétences Circet4communities, Circet France donne à ses équipes l'opportunité de se mobiliser pour la ou les causes qui leur tiennent à cœur en s'engageant dans des missions de volontariat six jours par an sur leur temps de travail.",
                },
                {
                  imageSrc: "/img/Candidats/Décarbonisation.webp",
                  title: "Décarbonation",
                  href: "/a-propos/Environnement-social-&-gouvernance",
                  desc: "Flotte de véhicules électriques, achats responsables, digitalisation des processus, optimisation des tournées des techniciens, gestion durable des déchets, audits chantier... pour produire consciencieusement tout en limitant l'impact environnemental.",
                },
              ]}
              colors={{
                title: "text-primary hover:text-accent",
                desc: "text-primary",
              }}
            />

            <div className="flex items-center text-primary underline text-sm font-semibold gap-3 justify-center mt-8 hover:no-underline">
              <img src="/img/Candidats/carousel-right-arrow.webp" />
              <Link href={"/a-propos/Environnement-social-&-gouvernance"}>
                En savoir plus sur nos démarches ESG
              </Link>
            </div>
          </Section>

          <Section xs={"mt-16"}>
            <h2 className="text-center text-3xl font-semibold mb-11">
              Parmi nos clients
            </h2>

            <Flex
              xs={"flex-wrap justify-center gap-8 w-1/2 mx-auto"}
              lg={"lg:w-full"}
            >
              <img src="/img/Candidats/Logo_Orange.webp" alt="Logo Orange" />
              <img src="/img/Candidats/Logo_Free.webp" alt="Logo Free" />
              <img src="/img/Candidats/Logo_SFR.webp" alt="Logo SFR" />
              <img
                src="/img/Candidats/Logo_Bouygues.webp"
                alt="Logo Bouygues"
              />
              <img
                src="/img/Candidats/Logo_altitude_infrastructure.webp"
                alt="Logo altitude infrastructure"
              />
              <img src="/img/Candidats/Logo_tdf.webp" alt="Logo tdf" />
            </Flex>
          </Section>
        </article>
      </Div>
      <Section xs={"mx-auto text-center mt-16 bg-second-background py-11"}>
        <h2 className="text-3xl font-semibold mb-8 text-secondary">
          Nos implantations
        </h2>
        <Link href={"/a-propos/implantations"}>
          <img
            src="/img/Candidats/implantations.webp"
            className="lg:w-11/12 w-full max-w-6xl mx-auto"
          />
        </Link>

        <div className="flex items-center text-secondary underline text-sm font-semibold gap-3 justify-center mt-8 hover:no-underline">
          <img src="/img/Candidats/right-arrow.webp" />
          <Link href={"/a-propos/implantations"}>
            Ouvrir la carte dynamique de nos implantations
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Candidats;
