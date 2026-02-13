import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupportType } from '../../../models/support-type.model';

@Component({
  selector: 'app-support-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './support-card.component.html',
  styleUrl: './support-card.component.css'
})
export class SupportCardComponent {
  @Input() supportType!: SupportType;
}
