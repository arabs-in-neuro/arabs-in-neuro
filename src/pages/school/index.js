import Overview from "./components/overview";
import ApplicationSection from "./components/applicationSection";
import SchoolDetails from "./components/schoolDetails";
import Feedback from "./components/feedback";
import SchoolDescription from "./components/schoolDescription";
import ResponsibilitiesComponent from "./components/responsibilites";


function SchoolPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
      <Overview />

      {/* <SchoolDetails /> */}

      <SchoolDescription />

      {/* <ResponsibilitiesComponent /> */}
      <ApplicationSection />
      <Feedback />
    </div>
  );
}
export default SchoolPage;
