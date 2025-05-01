import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parapharma';
 
  hideHeaderFooter: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit() {
  
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        const currentRoute = this.router.url;

    
        this.hideHeaderFooter = currentRoute === '/ges-clients' || 
                                currentRoute === '/ges-commandes' || 
                                currentRoute === '/ges-produits'||
                                currentRoute === '/admin-home' ;

    
        
      });
  }
}
