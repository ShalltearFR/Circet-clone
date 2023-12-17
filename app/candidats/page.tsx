import Header from "@/components/Header/Header";
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
        desc="Ceci n'est pas le réel site de Circet"
      />
      <article>
        
      </article>
    </>
  );
};

export default Candidats;
