import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  showJobSeeker: boolean = true;  // Default to show job seeker form
  showEmployer: boolean = false;

  showJobSeekerForm(): void {
    this.showJobSeeker = true;
    this.showEmployer = false;
  }

  showEmployerForm(): void {
    this.showJobSeeker = false;
    this.showEmployer = true;
  }

}
