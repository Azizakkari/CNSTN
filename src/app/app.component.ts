import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { Gallerie2Component } from './gallerie2/gallerie2.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { AcceuilcnstnComponent } from './acceuilcnstn/acceuilcnstn.component';
import  jsondata from   '../data/fichier.json';
import jsondataproc from '../data/procedures.json'
import { Header2Component } from './header2/header2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, RouterLink, RouterLinkActive, Header2Component ],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cnstnnewsite';
  mesfichier: any[]=jsondata.files;
  mesproc:any[]=jsondataproc.procedures;
}
