import ItemList from './item-list.js';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10 tracking-tight">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}