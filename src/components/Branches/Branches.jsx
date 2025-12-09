import React, { useState } from "react";
import map from "../../assets/map.png";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

const languages = [
  { code: "en", name: "English", country_code: "gb" },
  { code: "ar", name: "العربيه", country_code: "sa", dir: "rtl" },
];

// ✅ بيانات ثابتة بدلاً عن API
const staticBranches = [
  {
    id: 1,
    name: "فرع الدمام",
    address: "الدمام – حي الشاطئ – شارع الملك عبدالله",
    phone: "0548459312",
    map_url:
      "https://www.google.com/maps?sca_esv=8ff73cc9fbbf5111&rlz=1C5CHFA_enSA1042SA1042&output=search&q=%D9%85%D8%B9%D9%87%D8%AF+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZMLQ4RPdPjLPmOakFCN7X8CAEObRY5nUC_4-eAKPRM9dgRGnLaLauJwMC_6lNzUAjgx9or0JzuCw3wnW4MUTnao3V19ApFge2sp2XbbTl4P9JRGaIK689G9a9ZyDpl1eZOIy7JRfiMrb4dpJOmUsD8BfB3RQfDEpB5-jzu15b0AIBt6ZJNv11rV1rr4Mr-K8B_DM5Ng&entry=mc&ved=1t:200715&ictx=111",
  },
  {
    id: 2,
    name: "فرع الخبر",
    address: "الخبر – الواجهة البحرية – طريق الكورنيش",
    phone: "0548459312",
    map_url:
      "https://www.google.com/maps?sca_esv=8ff73cc9fbbf5111&rlz=1C5CHFA_enSA1042SA1042&output=search&q=%D9%85%D8%B9%D9%87%D8%AF+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1+%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB+%D9%84%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZMLQ4RPdPjLPmOakFCN7X8CAEObRY5nUC_4-eAKPRM9dgRGnLaLauJwMC_6lNzUAjgx9or0JzuCw3wnW4MUTnao3V19ApFge2sp2XbbTl4P9JRGaIK689G9a9ZyDpl1eZOIy7JRfiMrb4dpJOmUsD8BfB3RQfDEpB5-jzu15b0AIBt6ZJNv11rV1rr4Mr-K8B_DM5Ng&entry=mc&ved=1t:200715&ictx=111",
  },
];

export default function Branches() {
  const [cookies] = useCookies(["i18next"]);
  const currentLanguageCode = cookies.i18next || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const branches = staticBranches; // ← تم استبدال useBranches بالكامل
  const [expandedBranch, setExpandedBranch] = useState(null);

  function handleHeight(index) {
    setExpandedBranch(expandedBranch === index ? null : index);
  }

  return (
    <div className="container m-auto mt-20 mb-20">
      <h1 className="text-center text-4xl font-semibold pb-11 text-[#0C1727]">
        {t("Our Branches")}
      </h1>

      <div className="flex flex-wrap mx-2 justify-between gap-y-5">
        {/* Branch List */}
        <div className="w-full lg:w-6/12 flex justify-center items-center">
          <div>
            {branches.length > 0 ? (
              branches.map((branch, index) => (
                <div key={branch.id} className="mb-5">
                  {/* Branch Title */}
                  <div
                    className="flex items-center justify-between w-full md:w-[522px] h-[75px] bg-[#2A4E84] text-white rounded-full px-6 cursor-pointer"
                    onClick={() => handleHeight(index)}
                  >
                    <span>{branch.name}</span>
                    <button className="text-white">
                      <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center border-2 border-white">
                        <i className="fa-solid fa-angle-down text-xl"></i>
                      </div>
                    </button>
                  </div>

                  {/* Branch Details */}
                  <div
                    className={`bg-white px-4 ${
                      expandedBranch === index ? "h-[160px]" : "h-[0px]"
                    } text-[#2A4E84] transition-all duration-[0.7s] overflow-hidden`}
                  >
                    <p className="py-2 text-lg">
                      <span className="text-xl">{t("Address :")}</span>{" "}
                      {branch.address}
                    </p>

                    <p className="py-2 text-lg mb-2">
                      <span className="text-xl">{t("Phone :")}</span>{" "}
                      {branch.phone}
                    </p>

                    {branch.map_url && (
                      <a
                        href={branch.map_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center rounded-full border-[#2A4E84] border-2 text-[#2A4E84] py-2 px-4 mt-2 mb-2 font-semibold hover:bg-[#ECF1F9] duration-[0.5s] transition-all inline-block"
                      >
                        {t("Google Maps")}
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>{t("No branches found.")}</p>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="w-full lg:w-6/12 md:w-[525px] sticky top-1">
          <div className="ms-6">
            <img src={map} className="w-full" alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
}
