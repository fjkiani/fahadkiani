import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HealthHive from "./pages/HealthHive";
import MedicalAI from "./pages/MedicalAI";
import DataDashboard from "./pages/DataDashboard";
import RDChat from "./pages/RDChat";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import { Navbar, Footer } from "./components";
import "./styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/healthhive" element={<HealthHive />} />
        <Route path="/HealthHive" element={<HealthHive />} />
        <Route path="/medicalai" element={<MedicalAI />} />
        <Route path="/MedicalAI" element={<MedicalAI />} />
        <Route path="/datadashboard" element={<DataDashboard />} />
        <Route path="/DataDashboard" element={<DataDashboard />} />
        <Route path="/rdchat" element={<RDChat />} />
        <Route path="/RDChat" element={<RDChat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
