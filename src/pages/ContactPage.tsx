import { PageLayout } from '../components/PageLayout';

export function ContactPage() {
  return (
    <PageLayout>
      <section className="contact-page page-width">
        <p className="eyebrow">Get in touch / 03</p>
        <h1>Let's make something useful.</h1>
        <p>I'm always open to talking about software, web development, and interesting project ideas.</p>
        <div className="contact-links">
          <a href="mailto:tcoppola@wpi.edu">tcoppola@wpi.edu</a>
          <a href="tel:+18607708267">860-770-8267</a>
          <a href="https://www.linkedin.com/in/tylercoppola-247988366" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>
    </PageLayout>
  );
}
