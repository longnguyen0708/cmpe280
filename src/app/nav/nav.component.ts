import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() userName = "Long";
  @Input() cartItemNum;
  @Input() searchQuery = "";
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSeachSubmit() {
    console.log('seachQuery', this.searchQuery);
    if (this.searchQuery != '') {
      this.router.navigate(['/items'], {queryParams:{ seach: this.searchQuery}});
    }
  }

}
