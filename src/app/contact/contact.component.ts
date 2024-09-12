import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * ContactComponent is a standalone Angular component that provides
 * a contact form with validation and submission functionality.
 */
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
  emailSent = false;

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

  /**
   * Handles the form submission event.
   * Sends the form data to the server if the form is valid and the checkbox is checked.
   * @param ngForm - The reference to the Angular form being submitted.
   */
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
            this.emailSent = true;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  /**
   * Toggles the checkbox state for the privacy policy.
   * Updates the checkbox touched status.
   */ checkBoxToggle() {
    this.isChecked = !this.isChecked;
    this.isCheckboxTouched = true;
  }

  /**
   * Gets the image source URL for the checkbox based on its checked state.
   * @returns A string representing the image source path.
   */ get checkboxImageSrc(): string {
    return this.isChecked
      ? 'assets/img/checked.png'
      : 'assets/img/unchecked.png';
  }

  /**
   * Scrolls the window to the top smoothly.
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
