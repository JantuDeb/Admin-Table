import { SearchBar } from "./components/forms/SearchBar";
import { Pagination } from "./components/pagination/Pagination";
import Table from "./components/table/Table";

function App() {
  return (
    <main className="dark:bg-slate-800 min-h-screen p-4">
      <div className="shadow-lg rounded-sm">
        <SearchBar />
        <Table />
        <Pagination />
      </div>
    </main>
  );
}

export default App;
