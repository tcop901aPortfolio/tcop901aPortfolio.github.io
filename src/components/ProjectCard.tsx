import projects from '../../projects.json';

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
      <div className="project-media">
        {project.videoSrc ? (
          <video className="project-video" autoPlay muted loop playsInline poster={project.poster || undefined}>
            <source src={project.videoSrc} type="video/mp4" />
          </video>
        ) : <div className="project-media-placeholder">{project.imageText || 'Project Preview'}</div>}
      </div>
      <div className="project-content">
        <p className="project-type">Web application / software</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-skills-grid">
          {(project.skills || []).map((skill) => <span className="skill-card" key={skill}>{skill}</span>)}
        </div>
        {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View Project</a>}
      </div>
    </article>
  );
}
