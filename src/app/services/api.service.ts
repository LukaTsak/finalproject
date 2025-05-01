import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://restaurant.stepprojects.ge/api/Products/GetAll'
    );
  }

  getFilteredData(
    nutsPreference: boolean,
    vegPreference: boolean,
    category: string,
    spiceLevel: number
  ) {
    let baseUrl = 'https://restaurant.stepprojects.ge/api/Products/GetFiltered';
    let queryParams: string[] = [];

    if (vegPreference !== undefined) {
      queryParams.push(`vegeterian=${vegPreference}`);
    }
    if (nutsPreference !== undefined) {
      queryParams.push(`nuts=${nutsPreference}`);
    }
    if (spiceLevel !== undefined) {
      queryParams.push(`spiciness=${spiceLevel}`);
    }
    if (category) {
      queryParams.push(`categoryId=${category}`);
    }

    const url = queryParams.length
      ? `${baseUrl}?${queryParams.join('&')}`
      : baseUrl;

    console.log(url);
    return this.http.get(url);
  }

  postData(obj: any) {
    return this.http.post(
      'https://restaurant.stepprojects.ge/api/Baskets/AddToBasket', obj
    );
  }

  getBasket() {
    return this.http.get(
      'https://restaurant.stepprojects.ge/api/Baskets/GetAll'
    );
  }
}
