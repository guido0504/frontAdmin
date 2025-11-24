import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared';


@Component({
  selector: 'app-home',
  imports: [CommonModule,...SHARED_IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
description = 'Aprende reglas, uso de habilidades, costes y mucho más de los diferentes tcg.';




}
