import { Tw } from "@/types/tailwindest";
import { useState } from "react";
type TailwindClassName = Tw[keyof Tw];

interface SelectProps {
  name: string;
  options: string[];
  background?: TailwindClassName | string;
  textColor?: TailwindClassName | string;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  background = "",
  textColor = "text-secondary",
}) => {
  return (
    <select
      className={`inline-flex items-center justify-center mx-auto w-full rounded-full mb-5 px-6 py-3 ${background} ${textColor}`}
      name={name}
      defaultValue={"default"}
    >
      <option value="default" disabled hidden>
        - Sélectionner -
      </option>
      {options.map((option) => {
        return (
          <option key={crypto.randomUUID()} value={option.toLowerCase()}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
