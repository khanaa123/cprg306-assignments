"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items].sort((a, b) =>
    sortBy === "grouped"
      ? a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      : a[sortBy].localeCompare(b[sortBy])
  );

  function renderGrouped() {
    const groups = {};
    sortedItems.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });

    return Object.keys(groups).sort().map((cat) => (
      <div key={cat}>
        <h3 className="text-slate-400 text-xs uppercase tracking-widest mt-4 mb-1 px-1">{cat}</h3>
        {groups[cat].map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
        ))}
      </div>
    ));
  }

  const btn = "px-3 py-1 rounded border text-sm cursor-pointer";
  const active = `${btn} bg-blue-500 text-white border-blue-500`;
  const inactive = `${btn} bg-white text-gray-700 border-gray-300`;

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button className={sortBy === "name" ? active : inactive} onClick={() => setSortBy("name")}>Sort by Name</button>
        <button className={sortBy === "category" ? active : inactive} onClick={() => setSortBy("category")}>Sort by Category</button>
        <button className={sortBy === "grouped" ? active : inactive} onClick={() => setSortBy("grouped")}>Group by Category</button>
      </div>

      {sortBy === "grouped"
        ? renderGrouped()
        : sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
          ))}
    </div>
  );
}