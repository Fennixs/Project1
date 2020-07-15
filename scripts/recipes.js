let recipes = [

    {
        title: "Turkey Sandwich",
        src: "images/turkeySandwich.webp",
        alt: "Turkey Sandwich",
        price: '$7.69',
        description: "Oven-roasted turkey breast raised without antibiotics, emerald greens, vine-ripened tomatoes, red onions, mayo, spicy mustard, salt and pepper on Whole Grain.",
        nutrition:"Calories 540 Cal Calories from Fat 150 Cal   Fat 17 g Saturated Fat 4g   Trans Fatty Acid 0 g Cholesterol 55 mgSodium 1180 mg Carbohydrates 64 g Dietary Fiber 9 g Total Sugars 8 g Protein 37 g",
    },

    {
        title: "French Onion Soup",
        src: "images/soup.webp",
        alt: "soup",
        price: '$6.49',
        description: "Sweet onions in a savory broth with a sherry wine vinegar gastrique and sea salts, with gruyere and housemade Black Pepper Focaccia croutons.",
        nutrition:"Calories 310 Cal Calories from Fat120 Cal Fat14 g Saturated Fat6 g Trans Fatty Acid0 g Cholesterol20 mg Sodium1660 mg Carbohydrates35 g Dietary Fiber3 g Total Sugars15 g Protein13 g",
    }

];
let recipesContainer = document.getElementById('recipes');
let recipe;
for(let i=0; i < recipes.length; i++){
    recipe = recipes[i];

    recipesContainer.innerHTML += `
                                 <section  class="column">
                                   <div class="card">
                                        <img src=${recipe.src} alt=${recipe.alt} style="width:100%">
                                        <h1>${recipe.title}s</h1>
                                        <p class="price">${recipe.price}</p>
                                        <p>${recipe.description}
                                        </p>
                                        <div class="Nutrition">Nutrition Info
                                        <span class="hover-text">
                                            ${recipe.nutrition}
                                        </span>
                                        </div>
                                   </div>
                                </section>


                            `;
}


