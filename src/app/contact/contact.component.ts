import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;
  isChecked = false;
  isCheckboxTouched = false;

  post = {
    endPoint: 'https://ozcanmirdev.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.isCheckboxTouched = true;

    if (ngForm.submitted && ngForm.form.valid && this.isChecked) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.isChecked = false;
            this.isCheckboxTouched = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  // Toggle function to change the checkbox state
  checkBoxToggle() {
    this.isChecked = !this.isChecked;
    this.isCheckboxTouched = true;
  }

  // Get the image source based on the checked state
  get checkboxImageSrc(): string {
    return this.isChecked
      ? 'assets/img/checked.png'
      : 'assets/img/unchecked.png';
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
