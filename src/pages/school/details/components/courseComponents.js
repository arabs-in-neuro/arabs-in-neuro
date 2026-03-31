import LanguageContext from "@/context/LanguageContext";
import { useContext } from "react";

const CourseDayComponent = ({ title, description, schedule }) => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    timeHour, lecture
  } = currentContent.details;
  return (
    <div className="border border-cN200 overflow-hidden">
      <div className="bg-cRed text-cWhite p-2 flex justify-center items-center md:flex-row md:gap-2">
        <h2 className="text-center font-extrabold">{title}</h2>
      </div>

      <div className="md:flex md:flex-row md:divide-x divide-cN200">
        <div className="bg-cGreen text-cWhite text-md p-2 md:w-96">
          <p>{description}</p>
        </div>

        <div className="bg-cWhite w-full">
          <table className="w-full text-center">
            <thead className="bg-cPink text-cWhite text-center">
              <tr>
                <th>{timeHour}</th>
                <th>{lecture}</th>
              </tr>
            </thead>
            <tbody>
              {schedule && schedule.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{item.time}</td>
                  <td className="p-2">{item.lecture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};




  const CourseDays = ({courseDaysData}) => {
 
    return (
      <div className="lg:px-20 px-5 space-y-10">
        {courseDaysData && courseDaysData.map((courseDay, index) => (
          <CourseDayComponent
            key={index}
            title={courseDay.title}
            description={courseDay.description}
            schedule={courseDay.schedule}
          />
        ))}
      </div>
    );
  
}

export default CourseDays;
