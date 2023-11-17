import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'A Test Recipe',
    //         'This is simply a test',
    //         "https://www.cookipedia.co.uk/wiki/images/e/e3/Prawn_thermidor_recipe.jpg",
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20),
    //             new Ingredient('Kapusta', 20),
    //         ]
    //     ),
    //     new Recipe(
    //         'A Test Recipe2',
    //         'This is simply a test2',
    //         "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('MEAT', 3),
    //         ]
    //     ),
    // ];

    private recipes: Recipe[] = []

    constructor(private shoppingListService: ShoppinListService) { }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice())
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice())
    }

}