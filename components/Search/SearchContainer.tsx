/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Div, H2 } from "../StyledElement/StyledElement";
import Button from "../StyledElement/Button";
import Select from "../StyledElement/Select";
import activities from "@/annexes/activitiesList.json";
import contracts from "@/annexes/contractsList.json";
import regions from "@/annexes/regionsList.json";

interface SearchContainerProps {}

const SearchContainer: React.FC<SearchContainerProps> = ({}) => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [isAdvancedSearchHidden, setIsAdvancedSearchHidden] =
    useState<boolean>(true);
  const toggleAdvancedSearchVisibility = () => {
    setIsAdvancedSearchHidden(!isAdvancedSearchHidden);
  };

  return (
    <>
      <H2 xs="text-3xl font-semibold text-center mb-10">
        Je trouve l'offre qui me correspond
      </H2>
      <form action={"/offres-d'emploi"}>
        <label className="mb-4">
          <Div xs={"px-4 mx-auto"} md={"md:w-2/4"}>
            <div className="text-sm text-left mb-3 pl-5">
              Rechercher par mots clés
            </div>
            <input
              className="text-secondary h-12 w-full rounded-full px-5 py-3"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
              name="query"
            />
          </Div>
        </label>
        <Div
          xs={
            "text-center mx-3 my-3 mb-5 border border-tertiary border-dashed"
          }
          md={"md:w-3/4 md:mx-auto"}
          lg={"lg:w-2/4"}
        >
          <label
            className="flex justify-center hover:cursor-pointer text-lg font-bold px-5 py-3"
            onClick={toggleAdvancedSearchVisibility}
          >
            <img
              src="/img/Candidats/recherches_avancées.svg"
              className="mr-1"
            />
            Recherches avancées
          </label>
          <div
            className={`overflow-hidden transition-all ease-out duration-500 ${
              isAdvancedSearchHidden ? "h-0" : "h-[290px]"
            }`}
          >
            {/* Volet de recherche avancées */}
            <div className=" px-5 mx-auto">
              <label>
                <div className="text-sm text-left mb-3 pl-5 select-none">
                  Type de contrat
                </div>
                <Select name="contrat" options={contracts} />
              </label>
              <label>
                <div className="text-sm text-left mb-3 pl-5 select-none">
                  Activités
                </div>
                <Select name="activite" options={activities} />
              </label>

              <label>
                <div className="text-sm text-left mb-3 pl-5 select-none">
                  Région
                </div>
                <Select name="region" options={regions} />
              </label>
            </div>
          </div>
        </Div>

        <div className="px-4 text-center mb-5">
          <Button
            imgSrc="/img/Candidats/right-arrow-black.svg"
            background={"bg-accent"}
            textColor={"text-secondary"}
          >
            Recherche
          </Button>
        </div>
      </form>
    </>
  );
};

export default SearchContainer;
