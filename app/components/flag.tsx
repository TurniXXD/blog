import { Langs } from "@locales/config";
import type { Dispatch, SetStateAction } from "react";
import { FlagCz, FlagEn } from "./svg";

export default function Flag({
  locale,
  setLocale,
}: {
  locale: Langs;
  setLocale: Dispatch<SetStateAction<Langs>>;
}) {
  return (
    <div
      id="flag"
      className="-t-01 -r-01 absolute transition duration-300 ease-in-out hover:-translate-x-1 hover:translate-y-1 hover:scale-[1.1] hover:cursor-pointer"
      onClick={() =>
        setLocale((value) =>
          value === Langs.en ? (value = Langs.cz) : (value = Langs.en)
        )
      }
    >
      {locale === Langs.en ? <FlagCz /> : <FlagEn />}
    </div>
  );
}
