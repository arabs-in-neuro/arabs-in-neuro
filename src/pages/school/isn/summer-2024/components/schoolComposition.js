import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";

const SchoolComposition = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    schoolComposition,
    educationSection,
    educationDescription,
    handsOnComponent,
    handsOnDescription,
    projectDescription,
    projectOpportunity,
    networkingAndSocials,
    networkingDescription,
  } = currentContent.isnSchool.y2024;

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-center mb-16 text-3xl text-cRed font-extrabold">
        {schoolComposition}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {[
          {
            title: educationSection,
            description: educationDescription,
            icon: "📘",
          },
          {
            title: handsOnComponent,
            description: handsOnDescription,
            icon: "🧠",
          },
          {
            title: projectDescription,
            description: projectOpportunity,
            icon: "💡",
          },
          {
            title: networkingAndSocials,
            description: networkingDescription,
            icon: "🌐",
          },
        ].map((section, index) => (
          <section
            key={index}
            className="flex flex-col items-center p-8 rounded-lg shadow-lg"
          >
            <span className="text-5xl mb-4">{section.icon}</span>
            <h2 className="text-2xl text-cRed font-bold mb-4 text-center">
              {section.title}
            </h2>
            <p className="text-cN700 text-center">{section.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SchoolComposition;
