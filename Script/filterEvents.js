import display from "./display.js"
import filter from "./filters.js"
import recipes from "../recipes.js"


searchInput.addEventListener("keyup", function (e) {
        filter.filterInputs(e.target.value);
        filter.displayRecipes();
    });



// FILTER BY TAGS 


// Ingredient tag and filter 
const tagsContainer = document.querySelector(".tags")

const ingredientOption = document.querySelectorAll(".ingredientsOption")

Array.from(ingredientOption).forEach((item) => {
 item.addEventListener("click", () => {

        const ingredientNewTag = document.createElement("div");
        ingredientNewTag.classList.add("ingredientTag")
        ingredientNewTag.innerText = item.innerText;
        tagsContainer.appendChild(ingredientNewTag);

        filter.addTag(item.innerText)
    
        ingredientNewTag.addEventListener("click", () => {
            ingredientNewTag.remove();
            filter.removeTag(ingredientNewTag.innerText);
            filter.displayRecipes(recipes)
        })
    })
    

});


// Appliance tag and filter
const applianceOption = document.querySelectorAll(".appliancesOption")

Array.from(applianceOption).forEach((item) => {
    item.addEventListener("click", () => {

        const applianceNewTag = document.createElement("div");
        applianceNewTag.classList.add("applianceTag")
        applianceNewTag.innerText = item.innerText;
        tagsContainer.appendChild(applianceNewTag);
    
        filter.addTag(item.innerText)
    
        applianceNewTag.addEventListener("click", () => {
            applianceNewTag.remove()
            filter.removeTag();
            filter.displayRecipes(recipes)
        })
    })
});


// Ustensil tag and filter
const ustensilOption = document.querySelectorAll(".ustensilsOption")

Array.from(ustensilOption).forEach((item) => {
    item.addEventListener("click", () => {

        const ustensilNewTag = document.createElement("div");
        ustensilNewTag.classList.add("ustensilTag")
        ustensilNewTag.innerText = item.innerText;
        tagsContainer.appendChild(ustensilNewTag);

        filter.addTag(item.innerText)
    
        ustensilNewTag.addEventListener("click", () => {
            ustensilNewTag.remove()
            filter.removeTag();
            filter.displayRecipes(recipes)
        })
    })
});





// Ingredients Button searchBar 

const ingredientsSearchInput = document.querySelector(".sortBtnIngredients")

ingredientsSearchInput.addEventListener("keyup", (e) => {
    let ingredientsName = document.querySelectorAll(".ingredientsOption")

        let searchIngredientsName = e.target.value.toLowerCase();
        const ingredientResults = Array.from(ingredientsName)
        .filter(
            (item) => 
                item.innerText.toLowerCase().indexOf(searchIngredientsName) !== -1
        )
        .map((item) => item.innerText.trim());
        console.log(ingredientResults)
        return ingredientResults;
});


// Appliances Button searchBar 

const appliancesSearchInput = document.querySelector(".sortBtnAppliances")

appliancesSearchInput.addEventListener("keyup", (e) => {
    let appliancesName = document.querySelectorAll(".appliancesOption") 

        let searchAppliancesName = e.target.value.toLowerCase();
        const applianceResults = Array.from(appliancesName)
        .filter(
            (item) =>
                item.innerText.toLowerCase().indexOf(searchAppliancesName) !== -1
        )
        .map((item) => item.innerText.trim());
        console.log(applianceResults)
        return applianceResults;
});


// Ustensils Button searchBar 

const ustensilsSearchInput = document.querySelector(".sortBtnUstensils")

ustensilsSearchInput.addEventListener("keyup", (e) => {
    let ustensilsName = document.querySelectorAll(".ustensilsOption")


        let searchUstensilsName = e.target.value.toLowerCase();
        const ustensilResults = Array.from(ustensilsName)
        .filter(
            (item) => 
                item.innerText.toLowerCase().indexOf(searchUstensilsName) !== -1
        )
        .map((item) => item.innerText.trim());
        console.log(ustensilResults)
        return ustensilResults;
});