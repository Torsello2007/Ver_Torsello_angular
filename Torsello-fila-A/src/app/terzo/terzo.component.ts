import { Component } from '@angular/core';
import { QuartoComponent } from '../quarto/quarto.component';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [QuartoComponent],
  templateUrl: './terzo.component.html',
  styleUrl: './terzo.component.css'
})
export class TerzoComponent {
  name: string = 'terzo';
}