import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage'; // Adjust the import path as needed
// import Test2 from './pages/Test2';
// import Test from './pages/Test';
import './styles/App.scss';


//Projects pages
import HealthHive from "./pages/HealthHive";
import Ecommerce from './pages/Ecommerce';
import Healthcare from './pages/Healthcare';
import MedicalAI from './pages/MedicalAI';
import DataDashboard from './pages/DataDashboard';
import RDChat from './pages/RDChat';
import ProjectsPage from './pages/ProjectsPage';


// import eCommerce from './pages/eCommerce';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas, Skills, HeroSection, Footer, Header,   GetStarted, Explore, Button } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/Test" element={<Test />} /> */}
        <Route path="/MedicalAI" element={<MedicalAI />} />
        {/* //projects pages */}
        <Route path="/HealthHive" element={<HealthHive />} />
        <Route path="/DataDashboard" element={<DataDashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/RDChat" element={<RDChat />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />



        {/* Define other routes as needed */}
      </Routes>
      <Footer /> {/* Rendered on every page */}
      {/* <StarsCanvas /> Rendered on every page */}
    </BrowserRouter>
  );
};

export default App;
