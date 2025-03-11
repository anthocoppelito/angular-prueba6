import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { productsList } from './products.mock';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsList = productsList;

}
