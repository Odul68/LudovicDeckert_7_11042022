import data from "../recipes.js"
import display from "./display.js";
import filter from "./filters.js";

// import recipes from "../recipes.js"

// const formatIngredientString = (i) => {
//   let g = i.toLowerCase();
//   return `${i[0].toUpperCase()}${g.slice(1)}`;  
// };
// const ingredients = [ ...new Set(
//   recipes.flatMap((recipe) =>
//   recipe.ingredients.map((r) => formatIngredientString (r.ingredient))
//   )
// )
// ];


// Button functions for opening and closing

const ingredientsBtn = document.querySelector("#arrowIngredients");

ingredientsBtn.addEventListener("click", () => {
      // const i = filter.filteredRecipes
      // Array.from(i).forEach((item) => item.display.displayIngredientsButton(i))    


  document.querySelector(".ingredientsContent").classList.toggle("show");  
  document.getElementById("arrowIngredients").classList.toggle("active");
  document.querySelector(".sortBtnIngredients").classList.toggle("active");
  document.querySelector("#ingredientsBtn").classList.toggle("active");
})

const appliancesBtn = document.querySelector("#arrowAppliances");

appliancesBtn.addEventListener("click", () => {
    // const a = document.querySelectorAll(".appliancesContent");
    // Array.from(a).forEach((item) => item.classList.toggle("show"));

    document.querySelector(".appliancesContent").classList.toggle("show");
    document.getElementById("arrowAppliances").classList.toggle("active");
    document.querySelector(".sortBtnAppliances").classList.toggle("active");
    document.querySelector("#appliancesBtn").classList.toggle("active");
})

const ustensilsBtn = document.querySelector("#arrowUstensils");
ustensilsBtn.addEventListener("click", () => {
    const u = document.querySelectorAll(".ustensilsContent");
    Array.from(u).forEach((item) => item.classList.toggle("show"));
  document.getElementById("arrowUstensils").classList.toggle("active");
  document.querySelector(".sortBtnUstensils").classList.toggle("active");
  document.querySelector("#ustensilsBtn").classList.toggle("active");
})






















