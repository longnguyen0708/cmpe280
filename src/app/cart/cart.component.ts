import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cartItem';
import { CartService } from '../service/cart.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: FirebaseListObservable<CartItem[]>;
  orderItems: FirebaseListObservable<CartItem[]>;
  db: AngularFireDatabase;

  total: number = 0;

  //constructor(private cartService: CartService) { }
  constructor(db: AngularFireDatabase) {
    console.log("constructor clalled");
    this.cartItems = db.list('/cart/1');
    this.orderItems = db.list('/orders/1')
    // this.cartItems.forEach(element => {
    //   console.log(element)
    // /*  element.unit_price
    //   for(var i = 0 ; i < element.length; i++){
    //     total += element[i].qty * element[0].unit_price
    //   }*/
    // });

  }

  ngOnInit(): void {
    this.getTotal()
  }

  deleteItem(key: string){
    console.log("inside delete item")
    this.cartItems.remove(key);
    this.getTotal()
  }

  updateItem(key: string, value: String){
    console.log("inside update item")
    this.cartItems.update(key, {qty: value})
    this.getTotal()
  }

  getTotal(){
    this.total = 0;
    console.log("inside total")
    this.cartItems.subscribe(items => {
      for(var i = 0 ; i < items.length; i++){
        this.total += items[i].qty * items[i].unit_price
      }
    })
  }

  placeOrder(){
    this.cartItems.subscribe(items => {
      for(var i = 0 ; i < items.length; i++){
        this.orderItems.push({total: this.total}).then(function(ref){
          console.log("order key"+ref.key)
        })
        this.total += items[i].qty * items[i].unit_price
      }
    })
  }
}
