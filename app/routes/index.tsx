import { useMemo, useState } from "react";
import { useLocale } from "../root";
import { en, cz } from "~/data/locales/services";
import { Langs } from "~/data/locales/config";

export default function Index() {
  const { locale } = useLocale();
  const [activeCustomerField, setActiveCustomerField] = useState(0)

  const t = useMemo(() => {
    const t = locale === Langs.en ? en : cz;
    return t;
  }, [locale]);

  return (
    <div className="h-full">
      <div className="flex flex-col">
        <span className="flex flex-row contact-link text-xl sm:text-4xl mb-3">
          {t.title}
        </span>
        <span className="flex flex-row contact-link sm:text-xl">
          {t.desc}
        </span>
        <div className="flex flex-row border-sky-400 border-t-2 w-full my-10"></div>
        <div className="flex flex-row">
          <div className="flex-col w-content-one-third sm:w-content-half">
            <div className="flex flex-row gap-4 flex-wrap">
              {t.customers.map((c, i) => (
                <div
                  key={i}
                  className={`relative flex flex-row customer-field py-2 border-sky-400 border-2 hover:cursor-pointer ${activeCustomerField === i && 'customer-field-active'} items-center`}
                  onClick={() => setActiveCustomerField(i)}
                >
                  <div className="t-customer-field l-customer-field border-r-sky-400 bg-main absolute h-4 w-4 rotate-45 border-r-2"></div>
                  <div className="b-customer-field r-customer-field border-r-sky-400 bg-main absolute h-4 w-4 rotate-45 border-l-2"></div>
                  <img
                    src={activeCustomerField === i ? `/svg/icons/dark/${c.icon}.svg` : `/svg/icons/${c.icon}.svg`}
                    className="h-8 scale-75 w-1/5 mx-1 sm:mr-0"
                    alt={c.title}
                  />
                  <span className="text-xs sm:text-base w-4/5">
                    {c.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col w-content-two-thirds sm:w-content-half pl-3 sm:px-8">
            <div className="flex flex-row justify-start items-center">
              <img
                src={`/svg/icons/${t.customers[activeCustomerField].icon}.svg`}
                className="h-8 sm:h-10 scale-75 mr-2"
                alt={t.customers[activeCustomerField].title}
              />
              <span className="text-base sm:text-xl ">
                {t.customers[activeCustomerField].title}
              </span>
            </div>
            {t.customers[activeCustomerField].desc.map((desc, i) => (
              <div key={i} className="mt-5 ml-1">
                <span>{desc.title}</span> <br />
                <p className="mt-1 text-customer-desc">
                  {desc.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}