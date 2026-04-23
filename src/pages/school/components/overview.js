import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import Link from "next/link";
import { studentsApplicationLink, taApplicationLink } from "@/app/constants";

const Overview = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    introCompNeuroscience,
    introCourseTitle,
    introCourseDescription,
    summerSchoolContent,
    journeyDescription,
    applyNow,
    studentsApplication,
    teacherAssistantsApplication,
  } = currentContent.school;


  const applicationStatus = {
    en: "Applications will open from April 6 until April 19. ",
     ar: " سيتم فتح باب التقديم من 6 ابريل حتى 19 ابريل.",
  };

  // const applicationStatus = {
  //   en: "Applications are closed",
  //   ar: "تم إغلاق باب التقديم",
  // };
  
  const applicationsDuration = {
    en: "Applications are open from April 6 until April 26. ",
    ar: "باب التقديم مفتوح من 6 ابريل حتى 26 ابريل.",
  };
  // const applicationsDuration = {
  //   en: "We are no longer accepting applications; please check your email for an acceptance notification by June 15.",
  //   ar: "لم نعد نقبل طلبات الالتحاق، يرجى التحقق من بريدك الإلكتروني لمعرفة نتيجة القبول بحلول 15 يونيو.",
  // };

  const LinktoDetails = {
    en: "School Details and Study Materials",
    ar: "تفاصيل المدرسة ومواد الدراسة",
  };
  
  
  const schoolDuration = {
    en: "The school's duration is 3 weeks, starting from July 13 until 31.",
    ar: "مدة المدرسة 3 أسابيع، تبدأ من 13 حتى 31 يوليو.",
  };

  return (
    <div>
      <div className="md:py-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Text Content */}
        <div className="md:col-span-2 md:px-10 px-5 grid grid-cols-1 gap-4">
          <h1 className="lg:px-10 text-3xl font-extrabold text-cBlack">
            {introCompNeuroscience}
          </h1>
          <p className="lg:px-10 px-2 py-2 text-md text-cBlack">
            {summerSchoolContent}
          </p>
          <p className="lg:px-10 px-2 py-2 text-md text-cBlack">
            <span className="text-md font-bold text-cRed">
              {introCourseDescription}:{" "}
            </span>{" "}
            {journeyDescription}
          </p>
          <h3 className="lg:px-10 px-2 text-lg font-extrabold text-cN800">
            {schoolDuration[preferredLanguage]}
          </h3>
          <h3 className="lg:px-10 px-2 text-lg font-extrabold text-cN800">
            {applicationsDuration[preferredLanguage]}
          </h3>
        </div>

        {/* Banners Container */}
        <div className="md:col-span-1 flex flex-col justify-start items-start">
          {/*<div className="w-72 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto">*/}
          {/*  <h2 className="font-extrabold text-x py-3 text-cWhite font-bold">*/}
          {/*    {applicationStatus[preferredLanguage]}*/}
          {/*  </h2>*/}
          {/*</div>*/}

          <div className="w-72 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto">
            <h2 className="font-extrabold text-x py-3 text-cWhite font-bold">
              <Link href='./school/details'>{LinktoDetails[preferredLanguage]}</Link>
            </h2>
          </div>

          <Link
            href={studentsApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 h-[fit-content] bg-cRed shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto"
          >
            <div>
              <h2 className="font-extrabold text-xl py-3 text-cWhite font-bold">
                {studentsApplication}
              </h2>

              <button
                className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto"
                type="submit"
                role="button"
              >
                {applyNow}
                <img
                  className="ml-2"
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Link>
          <Link
            href={taApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 h-[fit-content] bg-cGreen shadow-md px-4 rounded-md space-y-1 mt-10 ltr:ml-auto rtl:mr-auto"
          >
            <div>
              <h2 className="font-extrabold text-xl py-2 text-cWhite font-bold">
                {teacherAssistantsApplication}
              </h2>

              <button
                className="flex items-center bg-cWhite text-cBlack px-5 py-2 rounded-md h-10 mx-auto"
                type="submit"
                role="button"
              >
                {applyNow}
                <img
                  className="ml-2"
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
