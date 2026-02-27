"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
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
        <h3>{cat}</h3>
        {groups[cat].map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    ));
  }

  return (
    <div>
      <button onClick={() => setSortBy("name")}>Sort by Name</button>
      <button onClick={() => setSortBy("category")}>Sort by Category</button>
      <button onClick={() => setSortBy("grouped")}>Group by Category</button>

      {sortBy === "grouped"
        ? renderGrouped()
        : sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
    </div>
  );
}