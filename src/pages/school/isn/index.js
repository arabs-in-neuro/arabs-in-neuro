import Overview from "./components/overview";
import PartnersSponsers from "./components/partnersSponsers";
import Schedule from "./components/schedule";
import SchoolComposition from "./components/schoolComposition";
import SchoolDescription from "./components/schoolDescription";
import CommingSoon from "./components/commingSoon";
import HistoryButton from "./components/historyButton";
import Instructors2025 from "./components/instructorsList";
import Photos from "./components/photos";

function IsnSchoolPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
      <Overview />
      <SchoolComposition />
      <Photos />
      <Instructors2025 />
      <Schedule />
      <PartnersSponsers />
      <HistoryButton url="/school/isn/summer-2024" />
    </div>
  );
}
export default IsnSchoolPage;
