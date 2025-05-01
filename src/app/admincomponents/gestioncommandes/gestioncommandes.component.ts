import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestioncommandes',
  standalone: true,
  imports: [],
  templateUrl: './gestioncommandes.component.html',
  styleUrl: './gestioncommandes.component.css'
})
export class GestioncommandesComponent {
  adminEmail = 'admin@admin.com';

  reportUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNjYyNmY4MWYtMTdlNS00MzIwLTgzOGEtMTJkNzBmZjViOTViIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9';
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
