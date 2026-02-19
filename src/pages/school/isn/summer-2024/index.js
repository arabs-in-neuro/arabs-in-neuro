import Overview from "./components/overview";
import PartnersSponsers from "./components/partnersSponsers";
import SchoolComposition from "./components/schoolComposition";
import Schedule from "./components/schedule";
import SchoolDescription from "./components/schoolDescription";
import HistoryButton from "./components/historyButton";


function IsnSchoolSummer2024() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
      <Overview />
      <SchoolComposition />
      <SchoolDescription />
      <Schedule />
      <PartnersSponsers />
      <HistoryButton url="/school/isn"/>
    </div>
  );
}
export default IsnSchoolSummer2024;
