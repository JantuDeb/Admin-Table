import { useUsers } from "../../context/users/user-context";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

const Table = () => {
  const { paginatedUsers } = useUsers();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead />
        <tbody>
          {paginatedUsers.map((user) => {
            return <TableRow key={user.id} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
