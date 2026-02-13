import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportType } from '../../../models/support-type.model';
import { DataService } from '../../../services/data.service';
import { SupportCardComponent } from '../../shared/support-card/support-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SupportCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  supportTypes: SupportType[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllSupportTypes().subscribe(data => {
      this.supportTypes = data;
    });
  }
}
