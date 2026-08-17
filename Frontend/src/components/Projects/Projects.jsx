import { useState } from "react";
import projects from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import CaseStudyModal from "./CaseStudyModal.jsx";
import Reveal from "../Reveal.jsx";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section bg-parchment">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">projects</p>
          <h2 className="text-3xl md:text-[42px] text-ink mb-14 leading-tight max-w-xl">
            Selected projects
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} onOpenCaseStudy={setActiveProject} />
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
