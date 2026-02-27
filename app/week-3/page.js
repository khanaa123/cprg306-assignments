// app/week-3/page.js
import Item from './GroceryItem.js';
import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12
} from './GroceryItemList.js';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
          Grocery List
        </h1>

        <ul className="space-y-3">
          <Item {...item1} />
          <Item {...item2} />
          <Item {...item3} />
          <Item {...item4} />
          <Item {...item5} />
          <Item {...item6} />
          <Item {...item7} />
          <Item {...item8} />
          <Item {...item9} />
          <Item {...item10} />
          <Item {...item11} />
          <Item {...item12} />
        </ul>
      </div>
    </main>
  );
}