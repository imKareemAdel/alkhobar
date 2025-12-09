import React from "react";
import img1 from "../../assets/اشبينا.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const branches = [
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

const StatsSection = () => {
  const { ref, inView: allInView } = useInView({ triggerOnce: true });

  return (
    <>
      <div className="container m-auto mt-16">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#254574]">
          About Us
        </h1>

        {/* ************** SECTION 1 ************** */}
        <div className="flex flex-wrap gap-[16px] justify-center items-center my-16 mx-5">
          <div className="w-full md:w-[624px]">
            <h1 className="text-[40px] text-[#315B9B] font-semibold my-4 leading-tight">
              About Al-Khobar Institute
            </h1>

            <p className="text-[18px] leading-[28px]">
              Al-Khobar Institute is one of the leading educational and training
              institutions in the Eastern Province of Saudi Arabia. We are
              committed to empowering individuals and organizations through
              high-quality programs that meet global standards and align with
              the Kingdom’s vision for human capital development.
            </p>
          </div>

          <div className="w-full md:w-[624px] h-[408px]">
            <img src={img1} className="w-full h-full rounded-xl" />
          </div>
        </div>

        {/* ************** SECTION 2 ************** */}
        <div className="flex flex-wrap flex-col-reverse md:flex-row gap-[16px] justify-center items-center my-16 mx-5">
          <div className="w-full md:w-[624px]">
            <h1 className="text-[40px] text-[#315B9B] font-semibold my-4 leading-tight">
              Our Training Approach
            </h1>

            <p className="text-[18px] leading-[28px]">
              Our training approach is built on:
            </p>

            <ul className="text-[18px] list-disc ps-6 mt-3 leading-[28px]">
              <li>Strong academic and professional expertise</li>
              <li>Modern learning environments</li>
              <li>Local & international training partnerships</li>
              <li>A distinguished team of expert trainers</li>
            </ul>
          </div>
        </div>

        {/* ************** SECTION 3 ************** */}
        <div className="flex flex-wrap gap-[16px] justify-center items-center my-12 mx-5">
          <div className="w-full md:w-[624px]">
            <h1 className="text-[40px] text-[#315B9B] font-semibold my-4 leading-tight">
              Branches of Al-Khobar Institute
            </h1>

            {branches.map((b) => (
              <div key={b.id} className="mb-6">
                <h2 className="text-2xl font-bold text-[#254574]">{b.name}</h2>
                <p className="text-[18px]">{b.address}</p>
                <p className="text-[18px]">هاتف: {b.phone}</p>
                <a
                  href={b.map_url}
                  target="_blank"
                  className="inline-block mt-2 text-[#315B9B] underline font-semibold"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ************** SECTION 4 ************** */}
        <div className="flex flex-wrap flex-col-reverse md:flex-row gap-[16px] justify-center items-center my-16 mx-5">
          <div className="w-full md:w-[624px]">
            <h1 className="text-[40px] text-[#315B9B] font-semibold my-4 leading-[60px]">
              Why Choose Us?
            </h1>

            <p className="text-[18px] leading-[29px]">
              Al-Khobar Institute has built a strong reputation in education and
              training through consistent quality and modern learning methods.
              Our success is driven by:
            </p>

            <ul className="text-[18px] list-disc ps-6 leading-[29px] mt-4">
              <li>Strong financial and human resources</li>
              <li>Strategic local and international partnerships</li>
              <li>Elite trainers and academic professionals</li>
            </ul>

            <p className="my-6 text-[18px] leading-[29px]">
              Our goal is to ensure customer satisfaction, maintain excellence,
              and uphold the highest standards in training and education.
            </p>
          </div>
        </div>
      </div>

      {/* ************** STATS ************** */}
      <div className="bg-[#ECF1F9] text-[#2A4E84] py-[0.1px] mb-16">
        <div
          ref={ref}
          className="flex flex-wrap justify-center items-center mx-12 my-16 gap-y-7"
        >
          <div className="w-full md:w-3/12 flex flex-col items-center">
            <div className="flex justify-center items-center h-[80px] w-[80px] rounded-full border-2 mx-3 border-[#2A4E84]">
              <i className="fa-solid fa-person-chalkboard text-4xl"></i>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-4xl">
                {allInView ? <CountUp end={376} duration={3} /> : 0}
              </h1>
              <p className="font-sans text-lg">Certified Trainer</p>
            </div>
          </div>

          <div className="w-full md:w-3/12 flex flex-col items-center">
            <div className="flex justify-center items-center h-[80px] w-[80px] rounded-full border-2 mx-3 border-[#2A4E84]">
              <i className="fa-solid fa-clipboard-user text-4xl"></i>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-4xl">
                {allInView ? <CountUp end={625} duration={3} /> : 0}
              </h1>
              <p className="font-sans text-lg">Our Clients</p>
            </div>
          </div>

          <div className="w-full md:w-3/12 flex flex-col items-center">
            <div className="flex justify-center items-center h-[80px] w-[80px] rounded-full border-2 mx-3 border-[#2A4E84]">
              <i className="fa-solid fa-list-check text-4xl"></i>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-4xl">
                {allInView ? <CountUp end={11293} duration={3} /> : 0}
              </h1>
              <p className="font-sans text-lg">Qualified Competencies</p>
            </div>
          </div>

          <div className="w-full md:w-3/12 flex flex-col items-center">
            <div className="flex justify-center items-center h-[80px] w-[80px] rounded-full border-2 mx-3 border-[#2A4E84]">
              <i className="fa-solid fa-calendar-days text-4xl"></i>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-4xl">
                {allInView ? <CountUp end={5800} duration={3} /> : 0}
              </h1>
              <p className="font-sans text-lg">Training Event</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsSection;
