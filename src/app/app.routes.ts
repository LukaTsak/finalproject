import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BasketComponent } from './basket/basket.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },


    {path: 'home', component: MainComponent },
    {path: 'basket', component: BasketComponent},


    {path: '**', redirectTo: ''}
];
