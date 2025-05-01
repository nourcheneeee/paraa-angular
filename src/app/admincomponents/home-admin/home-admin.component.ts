import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [  CommonModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})



export class HomeAdminComponent {
  reportUrl: SafeUrl;
  adminEmail = 'admin@admin.com';
  constructor(private sanitizer: DomSanitizer, private router: Router) {

    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://app.powerbi.com/view?r=eyJrIjoiMzc4MjQwMDEtMjlkMi00ZDA0LTk1M2YtYzlhMTRhMTg0Mjg3IiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9');
  }
  goTohomeclient() {
    this.router.navigate(['/']);
  }
  goTocarts() {
    this.router.navigate(['/ges-commandes']);
  }
  goTohome() {
    this.router.navigate(['/admin-home']);
  }
  goToProducts() {
    this.router.navigate(['/ges-produits']);
  }
  goToclients() {
    this.router.navigate(['/ges-clients']);
  }

}
