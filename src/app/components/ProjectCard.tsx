import Link from "next/link";
import Image from "next/image";
import { Project } from "../data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-image-wrap">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="project-image"
        />
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}
