import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showCart: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  displayCart(){
    this.showCart = !this.showCart;
  }
}
