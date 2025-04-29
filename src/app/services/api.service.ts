import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import e from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get('https://restaurant.stepprojects.ge/api/Products/GetAll');
  }

  getFilteredData(nutsPreference : boolean,vegPreference : boolean,category : string,spiceLevel : number) {
    // if(category == undefined && spiceLevel == undefined) {
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegPreference}&nuts=${nutsPreference}`);
    //   }
    // else if(category == undefined && spiceLevel != undefined) {
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegPreference}&nuts=${nutsPreference}&spiciness=${spiceLevel}`);
    // }
    // else if(category != undefined && spiceLevel == undefined) {
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegPreference}&nuts=${nutsPreference}&categoryId=${category}`);
    // }
    // else if(nutsPreference == undefined && vegPreference == undefined) {
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?spiciness=${spiceLevel}&categoryId=${category}`);
    // }
    // else if(nutsPreference == undefined && vegPreference != undefined) {
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegPreference}&spiciness=${spiceLevel}&categoryId=${category}`);
    // }
    // else if(nutsPreference != undefined && vegPreference == undefined) {
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?nuts=${nutsPreference}&spiciness=${spiceLevel}&categoryId=${category}`);
    // }
    // else if(nutsPreference == undefined && vegPreference == undefined && spiceLevel == undefined) {
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?categoryId=${category}`);
    // }
    // else{
    //   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegPreference}&nuts=${nutsPreference}&spiciness=${spiceLevel}&categoryId=${category}`);
    // }

    const params: any = [nutsPreference, vegPreference, category, spiceLevel];

    let url = `https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegPreference}&nuts=${nutsPreference}&spiciness=${spiceLevel}&categoryId=${category}`;
    let vegurl = 'vegeterian=${vegPreference}&'
    let nutsurl = 'nuts=${nutsPreference}&'
    let spiceurl = 'spiciness=${spiceLevel}&'
    let categoryurl = 'categoryId=${category}&'

    let newUrl! : any

    for(let i = 0; i < params.length; i++) {
      let categoryarr = [nutsurl,vegurl,categoryurl,spiceurl]
      if(params[i] == undefined) {
        newUrl = url.replace(categoryarr[i], '');
      }

      console.log(newUrl);
      return this.http.get(newUrl);
      
    }

    
  }
  
}