"use client";

import { useState } from "react";
import NewItem from "./NewItem.js";
import ItemList from "./item-list.js";
import MealIdeas from "./MealIdeas.js";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .trim()
      .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "")
      .trim();
    setSelectedItemName(cleanName);
  }

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
      <div className="flex gap-8 w-full max-w-4xl items-start">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}