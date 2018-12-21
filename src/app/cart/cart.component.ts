import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface IBike {
  id?: number;
  description: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<IBike> = [];
  params: string;
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.bikes = await this.loadBikes();
  }

  async loadBikes() {
    let bikes = JSON.parse(localStorage.getItem('bikes'));
    if (bikes && bikes.length > 0) {
    } else {
      bikes = await this.loadBikesFromJson();
    }
    this.bikes = bikes;
    return bikes;
  }

  async loadBikesFromJson() {
    const bikes = await this.http.get('assets/inventory.json').toPromise();
    return bikes.json();
  }

  addBikeModel1() {
    const bike: IBike = {
      id: null,
      description: null,
      price: null,
      quantity: null,
    };
    this.bikes.unshift(bike);
    this.saveToLocalStorage();
  }

  addBikeModel2() {
    const bike: IBike = {
      id: null,
      description: null,
      price: null,
      quantity: null,
    };
    this.bikes.unshift(bike);
    this.saveToLocalStorage();
  }

  addBikeModel3() {
    const bike: IBike = {
      id: null,
      description: null,
      price: null,
      quantity: null,
    };
    this.bikes.unshift(bike);
    this.saveToLocalStorage();
  }

  deleteBike(index: number) {
    this.bikes.splice(index, 1);
    this.saveToLocalStorage();
  }


  saveToLocalStorage() {
    localStorage.setItem('bikes', JSON.stringify(this.bikes));
  }

}