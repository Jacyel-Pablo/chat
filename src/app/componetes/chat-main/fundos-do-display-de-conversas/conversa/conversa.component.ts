import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversa.component.html',
  styleUrl: './conversa.component.css'
})
export class ConversaComponent {
  @Input() fundo2: string = ""
}
