"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

async function fetchMealDetails(idMeal) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await response.json();
  const meal = data.meals[0];

  // The API stores ingredients as strIngredient1, strIngredient2, ... strIngredient20
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [hoveredMeal, setHoveredMeal] = useState(null);
  const [mealIngredients, setMealIngredients] = useState([]);

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
  }

  useEffect(() => {
    if (!ingredient) return;
    loadMealIdeas();
  }, [ingredient]);

  async function handleMouseEnter(meal) {
    setHoveredMeal(meal.idMeal);
    const ingredients = await fetchMealDetails(meal.idMeal);
    setMealIngredients(ingredients);
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 w-80">
      <h2 className="text-white text-xl font-bold mb-4">
        {ingredient ? `Meal Ideas for "${ingredient}"` : "Click an item to see meal ideas"}
      </h2>
      <ul>
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            onMouseEnter={() => handleMouseEnter(meal)}
            onMouseLeave={() => { setHoveredMeal(null); setMealIngredients([]); }}
            className="text-slate-300 py-2 border-b border-slate-700 cursor-pointer"
          >
            {meal.strMeal}
            {hoveredMeal === meal.idMeal && (
              <div className="mt-2">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="rounded-lg w-full mb-2"
                />
                <p className="text-slate-400 text-xs font-semibold uppercase mb-1">Ingredients</p>
                <ul className="text-slate-300 text-sm list-disc list-inside">
                  {mealIngredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}