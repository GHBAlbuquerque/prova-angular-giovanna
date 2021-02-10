import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [IndexComponent, BlocksComponent, CardsComponent, FormsComponent, PricingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IndexComponent, 
    BlocksComponent, 
    CardsComponent, 
    FormsComponent,
    PricingComponent
  ]
})
export class PagesModule { }
