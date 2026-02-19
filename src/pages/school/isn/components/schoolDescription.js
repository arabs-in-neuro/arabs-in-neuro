import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";


const SchoolDescription = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    lecturesSeries,
    day1Title,
    day1Desc,
    day1DayNb,
    day2Title,
    day2Desc,
    day2DayNb,
    day3Title,
    day3Desc,
    day3DayNb,
    day4Title,
    day4Desc,
    day4DayNb,
    day5Title,
    day5Desc,
    day5DayNb,
  } = currentContent.isnSchool.y2025;

  return (
    <div className="container mx-auto px-5 py-10">
      <section className="py-20">
        <h1 className="text-center py-10 text-3xl text-cRed font-extrabold">
          {lecturesSeries}
        </h1>

        <div className="grid grid-cols-1 gap-10">
          {[
            { day: day1DayNb, title: day1Title, desc: day1Desc },
            { day: day2DayNb, title: day2Title, desc: day2Desc },
            { day: day3DayNb, title: day3Title, desc: day3Desc },
            { day: day4DayNb, title: day4Title, desc: day4Desc },
            { day: day5DayNb, title: day5Title, desc: day5Desc }
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-cWhite shadow-lg rounded-3xl lg:max-w-[90%] ${
                (preferredLanguage == "en" && index % 2 === 0) ||
                (preferredLanguage == "ar" && index % 2 != 0)
                  ? "lg:mr-auto"
                  : "lg:ml-auto"
              } grid gap-4 py-5`}
            >
              <div className="col-span-1 lg:col-span-3 flex flex-col justify-center px-5 ">
                <h3 className="font-bold mb-4">
                  <span className="text-2xl text-cRed">{item.day}:</span> <span className="text-xl text-cBlack">{item.title}</span>
                </h3>
                <p className="text-cBlack">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SchoolDescription;
