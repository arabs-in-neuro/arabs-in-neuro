import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";

const CommingSoon = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    scheduleDetailsComingSoon
  } = currentContent.isnSchool.y2025;

  return (
    <div className="container mx-auto">
        <h3 className="text-center py-10 text-xl text-cRed font-extrabold">
          {scheduleDetailsComingSoon}
        </h3>
    </div>
  );
};

export default CommingSoon;
