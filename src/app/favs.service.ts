    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Broken White Path      ************* DONETE *************        |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    |  Uso este servicio para gestionar favoritos en el local storage  |
    |                                                                  |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { Injectable } from '@angular/core';


@Injectable()
export class FavsService {

  private _saveFav(arrayId: number[], productId: number): void {
    arrayId.push(productId);
    localStorage.setItem("favs", JSON.stringify(arrayId));
  }

  private _getFav(){
    // console.log("Sin parsear:");
    // console.log(localStorage.getItem("favs"));
    // console.log("Parseado:");
    //console.log(JSON.parse(localStorage.getItem("favs")));
    return JSON.parse(localStorage.getItem("favs"));
  }

  private _delFav(productId: number): void {
    //console.log("ando por aqui");
    let arrayId = this._getFav();
    let index = arrayId.indexOf(productId);
    arrayId.splice(index,1);
    localStorage.setItem("favs", JSON.stringify(arrayId));
  }
  
  isFav(productId: number): boolean {
  let arrayId  = this._getFav();
  
  let index = arrayId.indexOf(productId);
  if (index !== -1){
      return true;
  } else {
      return false;
    }
  }

  FavDesFav(productId: number) {
    let fav = this.isFav(productId);
    //console.log(this.isFav(productId));
    if (fav === true) {
      //console.log("ando por aqui");
      this._delFav(productId);
    } else {
      let arrayId = this._getFav()
      this._saveFav(arrayId, productId);
    }
  }
}
