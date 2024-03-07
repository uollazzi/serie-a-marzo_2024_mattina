import { Component, OnInit } from '@angular/core';
import { CALCIATORI } from "../data/serie-a";
import { Calciatore, ICalciatore, TCalciatore } from '../models/calciatore';

@Component({
  selector: 'app-calciatori-list',
  templateUrl: './calciatori-list.component.html',
  styleUrl: './calciatori-list.component.css'
})
export class CalciatoriListComponent {
  calciatori: TCalciatore[] = CALCIATORI;

  convertiInDifensore(calciatore: TCalciatore) {
    calciatore.ruolo = 'D';
  }
}
