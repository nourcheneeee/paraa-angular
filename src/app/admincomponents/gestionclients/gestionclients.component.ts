import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestionclients',
  standalone: true,
  imports: [  CommonModule],
  templateUrl: './gestionclients.component.html',
  styleUrl: './gestionclients.component.css'
})
export class GestionclientsComponent {
  adminEmail = 'admin@admin.com';

  reportUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNGU2MzFmMjItNDg2ZS00MTRhLTlhZTYtNmRiOGUxOWRlYmMzIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9';
  constructor( private router: Router) {
  }
  goTocarts() {
    this.router.navigate(['/ges-commandes']);
  }
  goTohome() {
    this.router.navigate(['/admin-home']);
  }
  goTohomeclient() {
    this.router.navigate(['/']);
  }
  goToProducts() {
    this.router.navigate(['/ges-produits']);
  }
  goToclients() {
    this.router.navigate(['/ges-clients']);
  }
}
