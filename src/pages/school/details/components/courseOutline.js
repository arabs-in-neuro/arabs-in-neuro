import LanguageContext from "@/context/LanguageContext";
import { useContext } from "react";

const WeekOutline = ({ weekNb, days }) => {
  return (
    <div className="lg:flex-1 flex-2 flex flex-col items-start p-4">
      <h3 className="font-extrabold text-cGreen">{weekNb}:</h3>
      <hr className="border-t-2 border-cPinkLight w-full py-2" />
      <ul className="list-disc  px-5 py-2 text-md space-y-4">
        {days && days.map((day, index) => <li key={index}>{day}</li>)}
      </ul>
    </div>
  );
};
const CourseOutline = ({ courseOutlineData }) => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const { week, courseOutline } = currentContent.details;

  return (
    <div className="lg:px-20 px-5">
      <h1 className="mt-20 mb-5 text-2xl text-cN600 font-extrabold">
        {courseOutline}
      </h1>
      <div className="flex flex-wrap mx-auto">
        <div className="flex flex-wrap">
          {courseOutlineData &&
            courseOutlineData.map((weekData, index) => (
              <WeekOutline
                key={index}
                weekNb={`${week} ${weekData.nb}`}
                days={weekData.days}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
