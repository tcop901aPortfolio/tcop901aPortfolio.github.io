import { IonHeader, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router-dom';

export function SiteHeader() {
  const location = useLocation();

  return (
    <IonHeader className="site-header" translucent={false}>
      <IonToolbar>
        <div className="toolbar-inner">
          <a className="nav-logo" href="/" aria-label="Go to About page">
            <img src="/img/SEAL.png" alt="Worcester Polytechnic Institute seal" />
            <span>Tyler Coppola</span>
          </a>
          <nav aria-label="Main navigation">
            <a className={location.pathname === '/' ? 'active' : ''} href="/">About</a>
            <a className={location.pathname === '/projects' ? 'active' : ''} href="/projects">Projects</a>
            <a className={location.pathname === '/contact' ? 'active' : ''} href="/contact">Contact</a>
          </nav>
        </div>
      </IonToolbar>
    </IonHeader>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© 2026 Tyler Coppola</span>
        <div className="footer-contact">
          <a href="mailto:tcoppola@wpi.edu">tcoppola@wpi.edu</a>
          <a href="tel:+18607708267">860-770-8267</a>
          <a href="https://www.linkedin.com/in/tylercoppola-247988366" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}
