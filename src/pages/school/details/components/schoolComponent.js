import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import LanguageContext from "@/context/LanguageContext";
import CourseOutline from "./courseOutline";
import InstructorsList from "./instructorsList";
import DailySchedule from "./dailySchedule";
import CourseMaterials from "./courseMaterial";
import CollabsList from "./collabsList";
import ParticipantsNote from "./participantsNote";
import Link from "next/link";
import { studentsApplicationLink, taApplicationLink } from "@/app/constants";

function SchoolComponent({
  year,
  participantsNoteData,
  languageSpecificInstructors,
  materialsData,
  welcomeVideoUrl,
  langauageBasedCourseOutlineData,
  calendarUrl,
  languageSpecificCourseDays,
  collabsData,
  applyLink,
}) {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    summerSchoolConcluded,
    stayTuned,
    courseDetails,
    instructors,
    courseMaterials,
    participants,
    qualifications,
    applyHere,
    previousYear,
    latestYear,
    applyNow,
    studentsApplication,
    teacherAssistantsApplication,
  } = currentContent.details;


  const currentYear = new Date().getFullYear();

  const applicationStatus = {
    en: "Applications close on May 15. Results will be announced via email on june 15. Stay tuned!",
    ar: "سيتم إغلاق باب التقديم في 15 مايو، وستُعلن النتائج عبر البريد الإلكتروني في 15 يونيو. ترقبوا!",
  };

  const schoolDuration = {
    en: "The school's duration is 3 weeks, starting from September 1 until September 19.",
    ar: "مدة المدرسة 3 أسابيع، تبدأ من 1 سبتمبر حتى 19 سبتمبر.",
  };

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/faq.svg')]">
      <div className="py-20">
        <div className="fixed top-20 left-0 right-0 bg-cWhite z-10">
          <div className="flex items-center lg:px-20 px-5 mt-10 mb-5">
            <h1 className="text-3xl text-cBlack font-extrabold">
              {courseDetails}
            </h1>

          </div>
        </div>





        {languageSpecificInstructors && (
          <InstructorsList
            instructors={languageSpecificInstructors}
            instructorsTitle={instructors}
          />
        )}

        {materialsData && (
          <CourseMaterials
            courseMaterialsTitle={courseMaterials}
            materialsData={materialsData}
            welcomeVideoUrl={welcomeVideoUrl}
          />
        )}

        {langauageBasedCourseOutlineData && (
          <CourseOutline courseOutlineData={langauageBasedCourseOutlineData} />
        )}

        {languageSpecificCourseDays && (
          <DailySchedule
            calendarUrl={calendarUrl}
            courseDaysData={languageSpecificCourseDays}
          />
        )}

        {collabsData && (
          <CollabsList collabsData={collabsData} language={preferredLanguage} />
        )}


      </div>
    </div>
  );
}

export default SchoolComponent;
