import projects from '../../projects.json';
import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';

export function ProjectsPage() {
  return (
    <PageLayout>
      <section className="projects-page page-width">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 02</p>
          <h1>Projects</h1>
          <p>A collection of applications, experiments, and systems built through coursework and independent work.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={`${project.title}-${index}`} />)}
        </div>
      </section>
    </PageLayout>
  );
}
