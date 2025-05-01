import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  messageEnvoye = false;

  envoyerMessage() {
    this.messageEnvoye = true;
    setTimeout(() => this.messageEnvoye = false, 5000);
  }
  
}
