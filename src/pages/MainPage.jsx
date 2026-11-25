import {
  Contact,
  Hero,
  Explore,
  TechnologySection,
  StarsCanvas,
} from "../components";

const MainPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Hero />
      <TechnologySection />
      <div className="gradient-03 z-0" />
      <Explore />
      <Contact />
      <StarsCanvas />
    </div>
  );
};

export default MainPage;
