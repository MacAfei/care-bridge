import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SupportType } from '../../../models/support-type.model';
import { DataService } from '../../../services/data.service';
import { VolunteerFormComponent } from '../../shared/volunteer-form/volunteer-form.component';

@Component({
  selector: 'app-support-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, VolunteerFormComponent],
  templateUrl: './support-detail.component.html',
  styleUrl: './support-detail.component.css'
})
export class SupportDetailComponent implements OnInit {
  supportType: SupportType | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.dataService.getSupportTypeById(id).subscribe(type => {
          this.supportType = type;
        });
      }
    });
  }
}
