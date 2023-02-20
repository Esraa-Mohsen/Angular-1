import { Injectable } from '@angular/core';
import { DialogueService } from './dialogue.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:  any[]=[]
  constructor(private dialogueService: DialogueService, ) {
  this.products = [
    {
      "id": 1,
      "title": "Montessori Wooden Toy for Children Intelligence Development",
      "description": "Toy contains: wooden board with wire bead maze wooden ferrule pole 5 rings useful for: strengthening fine muscles in the hand when trying to connect beads from start to finish Learn colors through wooden rings Learn different sizes through wooden rings ",
      "price": 300,
      
      "thumbnail": "assets/images/asus.jpg",
    },
    {
      "id": 2,
      "title": "Ksjone Wooden Multi Colored",
      "description": "2Nice Design: Classic shape sorter toys, 5 different shape with fitting hole for post, round shape, 5 different bright colour perfectly sized for toddlers' hands, also great choice as travel toys, build early shape, color and size differentiation skills",
      "price": 150,
      
      "thumbnail": "assets/images/hp.jpg",
    },
    {
      "id": 3,
      "title": "Qiaowa Small Hammer Box Educational Toys ",
      "description": "Brand : Generic ,  Type : Toys , Color : Multi Color , Age Range : +3",
      "price": 300,
      
      "thumbnail": "assets/images/msi.jpg",
    },
    {
      "id": 4,
      "title": "Shape Sorter Educational Toy",
      "description": "Toy contains: wooden board with wire bead maze wooden ferrule pole 5 rings useful for: strengthening fine muscles in the hand when trying to connect beads from start to finish Learn colors through wooden rings Learn different sizes through wooden rings",
      "price": 350,
      
      "thumbnail": "assets/images/hp-white.jpg",
    },
    {
      "id": 5,
      "title": "Ksjone Wooden Multi Colored ",
      "description": "Toy contains: wooden board with wire bead maze wooden ferrule pole 5 rings useful for: strengthening fine muscles in the hand when trying to connect beads from start to finish Learn colors through wooden rings Learn different sizes through wooden rings",
      "price": 229,
      
      "thumbnail": "assets/images/asus2.jpg",
    },
    {
      "id": 6,
      "title": " Montessori Toys - Colorful Geometric Sets " ,
      "description": "Toy contains: wooden board with wire bead maze wooden ferrule pole 5 rings useful for: strengthening fine muscles in the hand when trying to connect beads from start to finish Learn colors through wooden rings Learn different sizes through wooden rings",
      "price": 500,
      
      "thumbnail": "assets/images/61N6rT8X6NL._AC_UL160_SR160,160_.jpg",
    },
    {
      "id": 7,
      "title": " Ksjone Wooden Multi Colored",
      "description": "Toy contains: wooden board with wire bead maze wooden ferrule pole 5 rings useful for: strengthening fine muscles in the hand when trying to connect beads from start to finish Learn colors through wooden rings Learn different sizes through wooden rings",
      "price": 500,
      
      "thumbnail": "assets/images/610gvsXHTTL._AC_SX679_.jpg",
    },
    {
      "id": 8,
      "title": "Maze with Colorful Ring Pole ",
      "description": "Toy contains: wooden board with wire bead maze wooden ferrule pole 5 rings useful for: strengthening fine muscles in the hand when trying to connect beads from start to finish Learn colors through wooden rings Learn different sizes through wooden rings",
      "price": 420,
      
      "thumbnail": "assets/images/51lhR5dtBrL._AC_.jpg",
    },
  ]
  }



  getAllProducts(){
    return this.products;
  }
  setProducts(products:any){
    this.products = products;
  }
  getProductById(id:any){
    let product = this.products.find( p=> p.id == id)
    return product;
  }

  addProduct(product:any){
    this.products = [...this.products, product]
  }

  updateProduct(product:any){
    let index = this.products.findIndex(p => p.id == product.id)
    let newArray = this.products;
    newArray[index] = product;
    this.products = [...newArray]
  }
}


