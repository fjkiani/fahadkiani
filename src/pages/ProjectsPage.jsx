import { Contact, Works, StarsCanvas } from "../components";

const ProjectsPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="gradient-03 z-0" />
      <Works />
      <Contact />
      <StarsCanvas />
    </div>
  );
};

export default ProjectsPage;
