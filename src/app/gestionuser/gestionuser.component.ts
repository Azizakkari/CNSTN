import { Component } from '@angular/core';
import { Utilisateur } from '../Utilisateur';
import { MesusersService } from '../mesusers.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-gestionuser',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatListModule, MatDividerModule, MatTableModule],
  templateUrl: './gestionuser.component.html',
  styleUrl: './gestionuser.component.css'
})
export class GestionuserComponent {
  utilisateur?: Utilisateur[];
  constructor(private mesusers: MesusersService){}
  ngOnInit(): void{
   
    this.mesusers.getallUsers().subscribe(data=>{
      this.utilisateur=data;
    }, err=>{
        console.log(err);

    });
  }
  

}
