import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../model/cartItem';
import { CartService } from '../service/cart.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router'
import { OrderHistoryItem } from '../model/orderHistoryItem';
import { OrderDetailItem } from '../model/orderDetailItem';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: FirebaseListObservable<CartItem[]>;
  orderItems: FirebaseListObservable<CartItem[]>;
  total: number = 0;
  orderHistoryItems: FirebaseListObservable<OrderHistoryItem[]>;
  orderDetailItems: FirebaseListObservable<OrderDetailItem[]>;
  orderKey: string
  db: AngularFireDatabase;
  userid: string = ""

  //constructor(private cartService: CartService) { }
  constructor(db: AngularFireDatabase, private route: ActivatedRoute, private authService: AuthService) {
    console.log("constructor clalled");

    console.log("constructor clalled");
    this.userid = localStorage.getItem('uid');//this.authService.getuserid();
    this.cartItems = db.list(`/cart/${this.userid}`);
    this.orderDetailItems = db.list(`/orderdetails/${this.userid}`);
    this.orderHistoryItems = db.list(`/orders/${this.userid}`);
    console.log("the user id is " + this.authService.getuserid())

  }

  ngOnInit(): void {
    this.getTotal()
/*    this.route.params
      .subscribe((params: Params) => {
        //this.cartItems = this.db.list(`/cart/${params['id']}`);
        this.orderItems = this.db.list(`/orders/${params['id']}`);
        this.getTotal()
      })*/
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
    var timestamp = new Date().getTime();

    this.cartItems.subscribe(items => {
      for(var i = 0 ; i < items.length; i++){
        var orderKeyhere = "";
        if (i == 0) {
          var date =  new Date()
          this.orderHistoryItems.push({order_total: this.total, dateOfOrder: date.toString(), order_id: timestamp.toString()})
          .then(function(ref){
            orderKeyhere = ref.key
            console.log("orderKeyhere"+orderKeyhere)
          })
        }

          this.total += items[i].qty * items[i].unit_price;
          let orderDetailItem = new OrderDetailItem();
          orderDetailItem.user_id = this.userid;
          orderDetailItem.item_id = items[i].item_id;
          orderDetailItem.name = items[i].name;
          orderDetailItem.imgUrl = items[i].imgUrl;
          orderDetailItem.qty = items[i].qty;
          orderDetailItem.unit_price = items[i].unit_price;
          orderDetailItem.order_id = timestamp.toString();
          this.orderDetailItems.push(orderDetailItem).then(function(ref){
            console.log("completed insertion into order details");
          })

          if ( i == items.length-1 ){
            this.cartItems.remove();
            console.log("removing cart items");
          }
        }

      //this.orderHistoryItems.update(this.orderKey,{order_total: this.total})
    })
  }

}
