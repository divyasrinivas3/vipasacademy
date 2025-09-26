import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CourseList from "./components/CourseList";
import ContactUs from "./components/ContactUs";
import FullStack from "./fullstack/page"; 
import Sdcourse from "./Sales&Distribution/page";
import MaterialCourse from "./sap-mm/page";
import Sapfico from "./sap-fico/page";
import CoursesSection from "./courses/page";
import LearningPath from "./components/LearningPath";
import SapEc from "./sap-ec/page";
import ProjectSystems from "./sap-ps/page";
import BusinessApplication from "./sap-abap/page";
import UserExperience from "./sap-fiori/page";
import BusinessTechnology from "./sap-btp/page";
import SfPmgm from "./SF-pmgm/page";
import RcmCourse from "./SF-rcm/page";
import RmkCourse from "./SF-rmk/page";
import OFBCourse from "./SF-ofb/page";
import OnbCourse from "./SF-onb/page";
import SacPlanningCourse from "./sap-SAC/page";
import DataAnalyticsCourse from "./excel/page";


function Apps() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            {/* Main Landing Page (/) */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                   <LearningPath/>
                  <CourseList />
                  <WhyChooseUs />
                  <Testimonials />
                  <ContactUs />
                </>
              }
            />

            {/* Fullstack Page Route */}
            <Route path="/fullstack" element={<FullStack />} />
              <Route path="/Sales&Distribution" element={<Sdcourse />} />
              <Route path="/sap-mm" element={<MaterialCourse />} />
              <Route path="/sap-fico" element={<Sapfico />} />
               <Route path="/sap-ec" element={<SapEc/>} /> 
               <Route path="/sap-ps" element ={<ProjectSystems/>}/>
               <Route path= "/sap-abap" element ={<BusinessApplication/>}/>
               <Route path="/courses" element={<CoursesSection/>} />
               <Route path="/sap-fiori" element={<UserExperience/>} />
              <Route path="/sap-btp" element={<BusinessTechnology/>} />
             <Route path="/SF-pmgm" element={<SfPmgm/>} />
              <Route path="/SF-rcm" element={<RcmCourse/>} />
              <Route path="/SF-rmk" element={<RmkCourse/>} />
              <Route path="/SF-ofb" element={<OFBCourse/>} />
               <Route path="/SF-onb" element={<OnbCourse/>} />
               <Route path="/sap-SAC" element={<SacPlanningCourse/>} />
                    <Route path="/excel" element={<DataAnalyticsCourse/>} />
          
          </Routes>
        
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default Apps;














































// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import WhyChooseUs from './components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import CourseList from './components/CourseList';
// import ContactUs from './components/ContactUs';




// function App() {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <CourseList />
//         <WhyChooseUs />
//         <Testimonials />
//         <ContactUs />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
