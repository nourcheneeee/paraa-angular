import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [[CommonModule, FormsModule]], 
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {
  messageEnvoye = false;

  envoyerMessage() {
    this.messageEnvoye = true;

   
    setTimeout(() => {
      this.messageEnvoye = false;
    }, 5000);
  }
}
