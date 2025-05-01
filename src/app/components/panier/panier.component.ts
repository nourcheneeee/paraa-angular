import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  panierItems = [
    {
      name: 'Produit 1',
      price: 12.99,
      quantity: 1,
      photoUrl: 'assets/p1.jpg'
    },
    {
      name: 'Produit 2',
      price: 8.50,
      quantity: 2,
      photoUrl: 'assets/p2.jpg'
    }
  ];
  
  increaseQuantity(index: number) {
    this.panierItems[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.panierItems[index].quantity > 1) {
      this.panierItems[index].quantity--;
    }
  }

  removeItem(index: number) {
    this.panierItems.splice(index, 1);
  }
totalPanier() {
    let total = 0;
    for (let item of this.panierItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  }

  validerPanier() {
    alert('Panier validé !');
    
  }
}

