import React from "react";

import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import img1 from "../../assets/اشبينا.png";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربيه",
    country_code: "sa",
    dir: "rtl",
  },
];

export default function OurBranches() {
  const [cookies] = useCookies(["i18next"]);
  const currentLanguageCode = cookies.i18next || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  return (
    <>
      <div className="container m-auto my-14">
        <h1 className="text-center text-4xl font-semibold pb-11 text-[#0C1727]">
          {t("Branches")}
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-1 mx-5">
          {/* ========== فرع الدمام ========== */}
          <div className="w-full md:w-[630px] py-3">
            <div className="border-2 p-6 flex flex-wrap gap-4 rounded-3xl border-[#2A4E84]">
              <img
                className="rounded-3xl h-[350px] w-full md:w-[301px]"
                src={img1}
              />

              <div className="w-full md:w-[261px]">
                <h1 className="text-xl my-3 font-semibold text-[#0C1727] ">
                  {t("Dammam Branch")}
                </h1>

                <p className="my-5 text-[#2A4E84]">
                  <span className="font-semibold text-[#0C1727]">
                    {t("Address :")}
                  </span>
                  {t("Dammam - Al Shati District - King Abdullah Road")}
                </p>

                <p className="my-5 text-[#2A4E84]">
                  <span className="font-semibold text-[#0C1727]">
                    {t("Phone :")}
                  </span>
                  0548459312
                </p>

                <a
                  href="https://www.google.com/maps?sca_esv=8ff73cc9fbbf5111&rlz=1C5CHFA_enSA1042SA1042&output=search&q=%D9%85%D8%B9%D9%87%D8%AF+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZMLQ4RPdPjLPmOakFCN7X8CAEObRY5nUC_4-eAKPRM9dgRGnLaLauJwMC_6lNzUAjgx9or0JzuCw3wnW4MUTnao3V19ApFge2sp2XbbTl4P9JRGaIK689G9a9ZyDpl1eZOIy7JRfiMrb4dpJOmUsD8BfB3RQfDEpB5-jzu15b0AIBt6ZJNv11rV1rr4Mr-K8B_DM5Ng&entry=mc&ved=1t:200715&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-lg mb-8 rounded-full border-[#2A4E84] border-2 text-[#2A4E84] my-3 py-2 px-5 font-semibold hover:bg-[#ECF1F9] duration-[0.5s] transition-all inline-block"
                >
                  {t("Google Maps")}
                </a>
              </div>
            </div>
          </div>

          {/* ========== فرع الخبر ========== */}
          <div className="w-full md:w-[630px] py-3">
            <div className="border-2 p-6 flex flex-wrap gap-4 rounded-3xl border-[#2A4E84]">
              <img
                className="rounded-3xl h-[350px] w-full md:w-[301px]"
                src={img1}
              />

              <div className="w-full md:w-[261px]">
                <h1 className="text-xl my-3 font-semibold text-[#0C1727] ">
                  {t("Khobar Branch")}
                </h1>

                <p className="my-5 text-[#2A4E84]">
                  <span className="font-semibold text-[#0C1727]">
                    {t("Address :")}
                  </span>
                  {t("Khobar - Corniche Road - Waterfront")}
                </p>

                <p className="my-5 text-[#2A4E84]">
                  <span className="font-semibold text-[#0C1727]">
                    {t("Phone :")}
                  </span>
                  0548459312
                </p>

                <a
                  href="https://www.google.com/maps?sca_esv=8ff73cc9fbbf5111&rlz=1C5CHFA_enSA1042SA1042&output=search&q=%D9%85%D8%B9%D9%87%D8%AF+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZMLQ4RPdPjLPmOakFCN7X8CAEObRY5nUC_4-eAKPRM9dgRGnLaLauJwMC_6lNzUAjgx9or0JzuCw3wnW4MUTnao3V19ApFge2sp2XbbTl4P9JRGaIK689G9a9ZyDpl1eZOIy7JRfiMrb4dpJOmUsD8BfB3RQfDEpB5-jzu15b0AIBt6ZJNv11rV1rr4Mr-K8B_DM5Ng&entry=mc&ved=1t:200715&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-lg mb-8 rounded-full border-[#2A4E84] border-2 text-[#2A4E84] my-3 py-2 px-5 font-semibold hover:bg-[#ECF1F9] duration-[0.5s] transition-all inline-block"
                >
                  {t("Google Maps")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
