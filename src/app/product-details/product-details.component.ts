import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ConfirmationService } from 'primeng/primeng';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { FavsService } from '../favs.service'; // Broken white path

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnDestroy, OnInit {

  product: Product;
  private _productSubscription: Subscription;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _confirmationService: ConfirmationService,
    private _FavsService: FavsService) { }
    

  ngOnInit(): void {
    this._route.data.forEach((data: { product: Product }) => this.product = data.product);
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    if (this._productSubscription !== undefined) {
      this._productSubscription.unsubscribe();
    }
  }

  private _buyProduct(): void {
    this._productSubscription = this._productService
      .buyProduct(this.product.id)
      .subscribe(() => this._showPurchaseConfirmation())
  }

  private _showPurchaseConfirmation(): void {
    this._confirmationService.confirm({
      rejectVisible: false,
      message: 'Producto comprado. ¡Enhorabuena!',
      accept: () => this._router.navigate(['/product'])
    });
  }

  showPurchaseWarning(): void {
    this._confirmationService.confirm({
      message: `Vas a comprar ${this.product.name}. ¿Estás seguro?`,
      accept: () => this._buyProduct()
    });
  }

  goBack(): void {
    window.history.back();
  }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Broken White Path      ************* DONETE *************        |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    |  Dos funciones que uso en el template, que llaman a los métodos  |
    |  del servicio a su vez.                                          |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  clickFavButton (productId: number): void {
    this._FavsService.FavDesFav(productId);
  }
  
  isFav (productId: number) {
   return this._FavsService.isFav(productId);
  }

}
