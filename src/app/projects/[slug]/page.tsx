import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../data/projects";
import ScreenshotSlider from "../../components/ScreenshotSlider";
import CopyField from "@/app/components/CopyField";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article className="project-detail">
      <div className="project-detail-hero">
        <div className="project-header">
          <div className="project-header-inner">
            <div className="project-logo-circle">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="project-logo-image rounded-full object-cover"
              />
            </div>

            <div className="project-title-wrap">
              <h1 className="project-title">{project.title}</h1>
              <div className="project-underline" />
            </div>
          </div>
        </div>

        <div className="detail-summary">
          <p className="eyebrow">Project Showcase</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div className="detail-links">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Live App
            </a>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>

      <section className="content-panel">
        <h2>Overview</h2>
        <p>
          {project.longDescription ||
            "[Placeholder] Add a full project overview here."}
        </p>
      </section>

      <section className="content-panel">
        <h2>Tech Stack</h2>
        <div className="tag-row">
          {project.techStack?.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          )) || <p>[Placeholder] Add your stack here.</p>}
        </div>
      </section>

      <section className="content-panel">
        <h2>Code Highlights</h2>

        {project.keySystems?.length ? (
          <div className="space-y-4">
            {project.keySystems.map((system, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 p-4"
              >
                <a
                  href={system.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg font-semibold text-orange-300"
                >
                  <span className="relative">
                    {system.title}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-300 transition-all duration-300 group-hover:w-full" />
                  </span>

                  <span className="text-sm opacity-60 transition group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                {system.description && (
                  <p className="mt-2 text-sm text-gray-300">
                    {system.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>[Placeholder] Add important code links here.</p>
        )}
      </section>

      {project.screenshots?.length > 0 && (
        <section className="content-panel">
        <h2>Screenshots</h2>
          <ScreenshotSlider
            screenshots={project.screenshots}
            title={project.title}
          />
          </section>
        )}
      

      {project.testingNotes?.length > 0 && (
  <section className="content-panel">
    <h2>How to Test It</h2>

    <div className="space-y-4">
      {project.testingNotes.map((note, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="font-semibold">{index + 1}.</span>
          <div>
            <p className="font-medium">{note.title}</p>

            {note.details.map((detail, i) => {
              const lower = detail.toLowerCase();
              const isEmail = lower.startsWith("email:");
              const isPassword = lower.startsWith("password:");

              if (isEmail || isPassword) {
                const value = detail.split(":").slice(1).join(":").trim();

                return (
                  <CopyField
                    key={i}
                    label={isEmail ? "Email" : "Password"}
                    value={value}
                  />
                );
              }

              return (
                <p key={i} className="text-sm text-gray-300">
                  {detail}
                </p>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
)}
    </article>
  );
}
