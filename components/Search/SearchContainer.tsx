/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { H2 } from "../StyledElement/StyledElement";
import Button from "../StyledElement/Button";

interface SearchContainerProps {}

const SearchContainer: React.FC<SearchContainerProps> = ({}) => {
  const [searchTxt, setSearchTxt] = useState<string>("");

  return (
    <>
      <H2 xs="text-3xl font-semibold text-center mb-8">
        Je trouve l'offre qui me correspond
      </H2>
      <form>
        <label className="mb-4">
          <div className="px-4 md:w-3/4 mx-auto">
            <div className="text-sm text-left mb-3 pl-5">
              Rechercher par mots clés
            </div>
            <input
              className="text-secondary h-12 w-full rounded-full px-5 py-3"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
          </div>
        </label>
        <div className="text-center px-6 py-3 mb-5">
          <label className="flex justify-center hover:cursor-pointer text-lg font-bold px-6 py-3">
            <img
              src="/img/Candidats/recherches_avancées.svg"
              className="mr-1"
            />
            Recherches avancées
          </label>
          <div> {/* Volet de recherche avancées */}</div>
        </div>

        <div className="px-4 text-center mb-5">
          <Button
            imgSrc="/img/Candidats/right-arrow-black.svg"
            background={"bg-accent"}
            textColor={"text-secondary"}
            onClick={""}
          >
            Recherche
          </Button>
        </div>
      </form>
    </>
  );
};

export default SearchContainer;
