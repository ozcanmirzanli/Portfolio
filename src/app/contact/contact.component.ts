import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  // Variable to track checkbox state
  isChecked = false;

  // Toggle function to change the checkbox state
  checkBoxToggle() {
    this.isChecked = !this.isChecked;
  }

  // Get the image source based on the checked state
  get checkboxImageSrc(): string {
    return this.isChecked
      ? 'assets/img/checked.png'
      : 'assets/img/unchecked.png';
  }
}
