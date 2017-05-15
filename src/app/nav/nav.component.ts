import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() userName = "Namitha Shetty";
  firstName = "firstName";
  @Input() uid = "";
  @Input() cartItemNum = 3;
  @Input() searchQuery = "";
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.firstName = this.userName.split(" ")[0];
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
