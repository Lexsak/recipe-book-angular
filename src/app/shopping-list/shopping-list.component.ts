import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(
    private shoppinListService: ShoppinListService,
    private logginService: LoggingService,
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinListService.getIngredients();
    this.igChangeSub = this.shoppinListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients
        }
      );
  }

  onEditItem(index: number) {
    this.shoppinListService.startedEditing.next(index)
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }
}
