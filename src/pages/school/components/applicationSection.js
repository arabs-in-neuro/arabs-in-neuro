import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import ResponsibilitiesComponent from "./responsibilites";

const ApplicationSection = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    applicationDetails,
    applyThroughLink,
    applicationDeadline,
    dontMissOut,
    applyNow,
  } = currentContent.description;

  const applicationStatus = {
    en: "Applications close on May 15, 2025",
    ar: "يغلق التقديم في 15 مايو 2025",
  };

  // const applicationsDuration = {
  //   en: "We are no longer accepting applications. ",
  //   ar: "لم نعد نقبل طلبات الالتحاق .",
  // };

  const applicationsDuration = {
    en: "Application period has not started yet. ",
    ar: "لم تبدا فتره التقديم بعد.",
  };

  return (
    <div className="text-cN800 mx-auto px-5 lg:px-20 lg:py-10 py-5">
      <section className="lg:py-20 py-10 px-4 py-6 bg-cWhite rounded-md shadow-xl transform transition duration-500 hover:scale-105">
        <h3 className="text-3xl font-bold mb-6 text-cRed text-center">
          {applicationDetails}
        </h3>
        <p className="mb-4 text-lg text-center text-gray-700">
        {applyThroughLink}
      </p>
        <p className="mb-8 text-lg font-semibold text-center text-gray-700">
          {applicationsDuration[preferredLanguage]}
        </p>
        <div className="text-center">
          <p className="text-xl font-medium mb-10 text-gray-700">
          {dontMissOut}
        </p>
          {/* <a
          href=""
          className="inline-block bg-cRed hover:bg-cRedLight text-cWhite font-bold py-3 px-8 rounded-lg text-lg shadow transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          {applyNow}
        </a> */}
        </div>
        <ResponsibilitiesComponent />
      </section>
    </div>
  );
};

export default ApplicationSection;
