import { Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { GallerieComponent } from './gallerie/gallerie.component';

export const routes: Routes = [
    {path: 'presentation', component: PresentationComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gallerie', component: GallerieComponent},

];
