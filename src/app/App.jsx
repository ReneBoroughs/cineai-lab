import { SiteHeader } from '../components/layout/SiteHeader.jsx';
import { SiteFooter } from '../components/layout/SiteFooter.jsx';
import { HomeSection } from '../components/sections/HomeSection.jsx';
import { VisionSection } from '../components/sections/VisionSection.jsx';
import { ProjectsSection } from '../components/sections/ProjectsSection.jsx';
import { MissingPieceSection } from '../components/sections/MissingPieceSection.jsx';
import { ResearchSection } from '../components/sections/ResearchSection.jsx';
import { TechnologySection } from '../components/sections/TechnologySection.jsx';
import { ExperienceSection } from '../components/sections/ExperienceSection.jsx';
import { CreatorSection } from '../components/sections/CreatorSection.jsx';
import { CollaborateSection } from '../components/sections/CollaborateSection.jsx';

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeSection />
        <VisionSection />
        <ProjectsSection />
        <MissingPieceSection />
        <ResearchSection />
        <TechnologySection />
        <ExperienceSection />
        <CreatorSection />
        <CollaborateSection />
      </main>
      <SiteFooter />
    </>
  );
}
