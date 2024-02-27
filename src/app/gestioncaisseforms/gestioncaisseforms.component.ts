import { Component } from '@angular/core';
import jsondata from '../../data/fichier.json'



@Component({
  selector: 'app-gestioncaisseforms',
  standalone: true,
  imports: [],
  templateUrl: './gestioncaisseforms.component.html',
  styleUrl: './gestioncaisseforms.component.css'
})
export class GestioncaisseformsComponent {
  mesfichier: any[]=jsondata.files;


}
