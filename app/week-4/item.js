

export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center bg-slate-800 p-4 rounded-lg mb-3 border border-slate-700 hover:bg-slate-700 transition-colors">
      <div>
        <div className="text-white font-medium text-lg">{name}</div>
        <div className="text-slate-400 text-sm mt-1 capitalize">{category}</div>
      </div>
      <span className="bg-teal-700 text-teal-100 px-3 py-1 rounded-full text-sm font-semibold">
        {quantity}
      </span>
    </li>
  );
}