import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  @Input() fundo2: string = "";
}
