import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    email: '',
    nom: '',
    prenom: '',
    numerotel: '',
    adresse: '',
    mdp: '',
  };

  successMessage = 'Registration successful!';
  errorMessage = '';
  successMessageVisible = false;
  errorMessageVisible = false;
  mdpVisible = false;

  toggleMdpVisibility() {
    this.mdpVisible = !this.mdpVisible;
  }

  onSubmit() {
    if (this.isValidForm()) {
      this.successMessageVisible = true;
      this.errorMessageVisible = false;
    
      console.log('Form submitted:', this.user);
    } else {
      this.successMessageVisible = false;
      this.errorMessageVisible = true;
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

  private isValidForm(): boolean {
    return (
      !!this.user.email &&
      !!this.user.nom &&
      !!this.user.prenom &&
      !!this.user.numerotel &&
      !!this.user.adresse &&
      !!this.user.mdp
    );
  }
}
