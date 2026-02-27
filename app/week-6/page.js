"use client";

import { useState } from "react";
import NewItem from "./NewItem.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}