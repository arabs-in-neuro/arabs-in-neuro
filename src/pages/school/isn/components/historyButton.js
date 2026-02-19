import LanguageContext from "@/context/LanguageContext";
import React, { useContext } from "react";
import Link from "next/link";

const HistoryButton = ({ url = "/school/isn" }) => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {previousSchool, latestSchool} = currentContent.isnSchool.y2025;
  const description = url === "/school/isn" ? latestSchool : previousSchool;

  return (
    <div className="lg:px-20 px-5 py-5">
      <Link href={url}>
        <button className="bg-cPink text-cWhite py-2 px-4 my-5 rounded-md mx-auto lg:mx-0">
          {description}
        </button>
      </Link>
    </div>
  );
};
export default HistoryButton;