import { IonContent, IonPage } from '@ionic/react';
import type { ReactNode } from 'react';
import { SiteFooter, SiteHeader } from './SiteChrome';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <IonPage>
      <SiteHeader />
      <IonContent fullscreen>
        <main>{children}</main>
        <SiteFooter />
      </IonContent>
    </IonPage>
  );
}
