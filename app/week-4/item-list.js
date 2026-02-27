import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
  return (
    <ul className="flex flex-col gap-3 w-full max-w-xl mx-auto">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}