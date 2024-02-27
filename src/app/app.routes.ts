import { Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { Gallerie2Component } from './gallerie2/gallerie2.component';
import { AcceuilcnstnComponent } from './acceuilcnstn/acceuilcnstn.component';
import { GestioncaisseformsComponent } from './gestioncaisseforms/gestioncaisseforms.component';

export const routes: Routes = [
    {path: 'presentation', component: PresentationComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gallerie', component: GallerieComponent},
    {path: 'gallerie2', component: Gallerie2Component},
   {path: 'acceuilcnstn',component:AcceuilcnstnComponent},
   {path: 'gestioncaisse',component:GestioncaisseformsComponent},
   {path: '', component:AcceuilcnstnComponent}

];
