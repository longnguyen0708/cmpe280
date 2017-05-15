import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() userName = "Namitha Shetty";
  firstName = "firstName";
  @Input() uid = "";
  @Input() cartItemNum = 0;
  @Input() searchQuery = "";

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.firstName = this.userName.split(" ")[0];
    this.calculateCartItemNum();
  }

  calculateCartItemNum() {
    this.cartService.getCart(this.uid).subscribe((items) => {
      this.cartItemNum = 0;
      items.forEach(item => {
        this.cartItemNum += Number(item.qty);
      })
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  onSeachSubmit() {
    console.log('seachQuery', this.searchQuery);
    if (this.searchQuery != '') {
      this.router.navigate(['/items'], {queryParams:{ seach: this.searchQuery}});
    }
  }

}
