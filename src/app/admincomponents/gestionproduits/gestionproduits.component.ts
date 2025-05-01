import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionproduits',
  standalone: true,
  imports: [],
  templateUrl: './gestionproduits.component.html',
  styleUrl: './gestionproduits.component.css'
})
export class GestionproduitsComponent {
adminEmail = 'admin@admin.com';

  reportUrl = 'https://app.powerbi.com/view?r=eyJrIjoiMzFhZTA4MmYtNmVmMi00YmUyLWJmNWItOWY3YTQ4YTQzZWE4IiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9';
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
