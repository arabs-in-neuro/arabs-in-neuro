import React from "react";
import LanguageContext from "@/context/LanguageContext";
import {
  participantsNoteData,
  courseDaysData,
  instructorsData,
  materialsData,
  courseOutlineData,
  welcomeVideoUrl,
  calendarUrl,
  collabsData,
  applyLink
} from "../../../../public/data/school/schooldetails";
import SchoolComponent from "./components/schoolComponent";

function School() {
  const languageContext = React.useContext(LanguageContext);
  const { preferredLanguage } = languageContext;

  const languageSpecificInstructors =
    instructorsData[preferredLanguage] || instructorsData.en;
  const languageSpecificCourseDays =
    courseDaysData[preferredLanguage] || courseDaysData.en;
  const langauageBasedCourseOutlineData =
    courseOutlineData[preferredLanguage] || courseOutlineData.en;

  return (
    <SchoolComponent
      participantsNoteData={participantsNoteData}
      languageSpecificInstructors={languageSpecificInstructors}
      materialsData={materialsData}
      welcomeVideoUrl={welcomeVideoUrl}
      langauageBasedCourseOutlineData={langauageBasedCourseOutlineData}
      calendarUrl={calendarUrl}
      languageSpecificCourseDays={languageSpecificCourseDays}
      collabsData={collabsData}
      applyLink={applyLink}
    />
  );
}

export default School;
