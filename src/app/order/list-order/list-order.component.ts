import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  orders: Observable<Order>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.orders = this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}
