import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { IndexComponent } from './index/index.component';
import { PricingComponent } from './pricing/pricing.component';


export const PagesRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'blocks', component: BlocksComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'pricing', component: PricingComponent}
];


