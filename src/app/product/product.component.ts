import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';
import { FavsService } from '../favs.service'; // Broken white path

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

 constructor(
    private _FavsService: FavsService) { }

  @Input() data: Product;

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
  | Green Path      ************* DONETE *************               |
  |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
  | Expón un atributo de salida con el decorador correspondiente. El |
  | tipo de dicho atributo debe permitir la emisión de eventos; la   |
  | idea es enviar al componente padre el producto sobre el cuál se  |
  | ha hecho clic. Y puesto que dicho clic se realiza en el template |
  | de este componente, necesitas, además, un manejador para el      |
  | mismo.                                                           |
  |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  @Output() clickOnProduct = new EventEmitter<Product>();
  
    productClick(product: Product): void {
      //console.log(product.id)
      //console.log(product)
      this.clickOnProduct.emit(product);
    }

  isFav (productId: number) {
   return this._FavsService.isFav(productId);
  }

  clickFavButton (productId: number): void {
    this._FavsService.FavDesFav(productId);
  }  

}		  



