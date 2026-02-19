import React, { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";

const Schedule = () => {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const {
    tentativeProgram,
    dayLabel,
    time,
    lectureTutorial,
    speaker,
    schedule,
  } = currentContent.isnSchool.y2024;

  return (
    <div className="mx-auto px-5 md:px-20 py-10">
      <h1 className="text-center mb-16 text-3xl text-cRed font-extrabold">
        {tentativeProgram}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-cWhite rounded-lg shadow-lg border border-cN300">
          <thead className="bg-cRed text-white">
            <tr>
              <th className={`py-4 px-6 ${preferredLanguage == 'ar' ? "text-right" : "text-left"} text-md font-semibold`}>
                {dayLabel}
              </th>
              <th className={`py-4 px-6 ${preferredLanguage == 'ar' ? "text-right" : "text-left"} text-md font-semibold`}>
                {time}
              </th>
              <th className={`py-4 px-6 ${preferredLanguage == 'ar' ? "text-right" : "text-left"} text-md font-semibold`}>
                {lectureTutorial}
              </th>
              <th className={`py-4 px-6 ${preferredLanguage == 'ar' ? "text-right" : "text-left"} text-md font-semibold`}>
                {speaker}
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((day, dayIndex) =>
              day.sessions.map((session, sessionIndex) => (
                <tr
                  key={`${dayIndex}-${sessionIndex}`}
                  className={`${dayIndex % 2 === 0 ? `bg-gray-50` : ``} ${
                    sessionIndex === 0
                      ? "border-t-2 border-cN300"
                      : "border border-cN200"
                  }`}
                >
                  {sessionIndex === 0 && (
                    <td
                      rowSpan={day.sessions.length}
                      className="py-4 px-6 text-md align-top"
                    >
                      {day.day}
                    </td>
                  )}
                  <td className="py-4 px-6 text-md">{session.time}</td>
                  <td className="py-4 px-6 text-md">{session.lecture}</td>
                  <td className="py-4 px-6 text-md">{session.speaker}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Schedule;
