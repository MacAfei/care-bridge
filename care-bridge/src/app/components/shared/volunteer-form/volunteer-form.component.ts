import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-volunteer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './volunteer-form.component.html',
  styleUrl: './volunteer-form.component.css'
})
export class VolunteerFormComponent implements OnInit {
  @Input() supportTypeTitle: string = '';
  volunteerForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.volunteerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      supportType: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.supportTypeTitle) {
      this.volunteerForm.patchValue({ supportType: this.supportTypeTitle });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.volunteerForm.valid) {
      console.log('Form Submitted:', this.volunteerForm.value);
      this.successMessage = 'Thank you for your interest! We will contact you shortly.';
      this.volunteerForm.reset();
      this.submitted = false;
    }
  }
}
