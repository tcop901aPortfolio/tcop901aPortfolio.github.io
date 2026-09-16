import { PageLayout } from '../components/PageLayout';

const skills = [
  'Python',
  'C++',
  'JavaScript',
  'HTML',
  'CSS',
  'Firebase',
  'Git',
  'LLM Prompting',
  'Operating Systems',
  'OpenCV',
  'Web Development',
];

export function AboutPage() {
  return (
    <PageLayout>
      <section className="about-page page-width">
        <div className="about-intro">
          <div className="about-copy">
            <p className="eyebrow">About / 01</p>
            <h1>Tyler Coppola</h1>
            <h2>Computer Science major and Financial Technologies minor</h2>
            <p className="intro-copy">I'm Tyler, a computer science student at WPI interested in web development, software systems, and thoughtful digital tools.</p>
            <a className="text-link" href="/projects">Explore my work <span aria-hidden="true">↙</span></a>
            <a className="button-link" href="/projects">View Projects</a>
          </div>
          <div className="about-portrait">
            <img src="/img/SEAL.png" alt="Worcester Polytechnic Institute seal" />
          </div>
        </div>
        <div className="about-skills">
          <p className="eyebrow">Currently learning and working with</p>
          <div className="skills-grid">
            {skills.map((skill) => <span className="skill-card" key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
