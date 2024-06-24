import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profileForm!: FormGroup;
  originalProfileData: any;
  dateOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    second: 'numeric',
  } as const;

  time = new Intl.DateTimeFormat('en-GB', this.dateOptions).format(new Date());

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['Tamas'],
      lastName: ['Piros'],
      email: ['tamas@cloudinary.com'],
    });

    this.originalProfileData = structuredClone(this.profileForm.value);
  }

  resetForm() {
    this.profileForm.reset(this.originalProfileData);
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Submitting', this.profileForm.value);
      this.originalProfileData = structuredClone(this.profileForm.value);
    }
  }
}
