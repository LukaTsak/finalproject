import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [CardComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private httpData : ApiService){}


  ngOnInit(){
    this.httpData.getData().subscribe((res: any) => {
      console.log(res.data)
    })
  }
}
