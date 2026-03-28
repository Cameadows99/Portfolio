import SectionHeading from "../components/SectionHeading";
import ProjectGallery from "../components/ProjectGallery";

export default function ProjectsPage() {
  return (
    <div>
      <SectionHeading
        title="Projects"
        subtitle="A collection of applications I’ve built, with deeper pages for screenshots, code, links, and implementation details."
      />
      <ProjectGallery />
    </div>
  );
}
