import { useUsers } from "../../context/users/user-context";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

const Table = () => {
  const { paginatedUsers,loading } = useUsers();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {loading ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
          </svg>
        </div>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHead />
          <tbody>
            {paginatedUsers.map((user) => {
              return <TableRow key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
