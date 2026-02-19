import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";

const PartnersSponsers = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { sponsorsAndPartners } = currentContent.isnSchool.y2025;

  const partnersSponsersData = [
    { image: "/assets/school/nyuad-cbh-logo.png", alt: "Nyu" },
    { image: "/assets/school/ibro.jpg", alt: "Ibro" },
    { image: "/assets/school/auc.png", alt: "AUC" },

  ];

  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className="text-2xl text-cN600 font-extrabold">
        <h1 className="py-10 text-center text-3xl text-cRed font-extrabold">
          {sponsorsAndPartners}
        </h1>
        <div className="lg:px-20 px-10 py-5 flex flex-wrap justify-center gap-10 lg:gap-20 mx-auto">
          {partnersSponsersData &&
            partnersSponsersData.map((item, itemIndex) => (
              <img
                key={itemIndex}
                src={item.image}
                alt={item.alt}
                className="md:w-1/3 w-full h-auto rounded-md object-contain"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSponsers;
