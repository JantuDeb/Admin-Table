import { filterActions } from "../../actions/filter-actions";
import { useUsers } from "../../context/users/user-context";
import { ChceckBox } from "../checkbox/ChceckBox";

export const TableHead = () => {
  const { selectAll, paginatedUsers, deSelectAll , filterDispatch} = useUsers();
  const isAllSelected = paginatedUsers.every((user) => user.selected);

  const handleSelection = () => (isAllSelected ? deSelectAll() : selectAll());
  const handleClick = (e) => {
    const colName = e.target.dataset.colName
    if(e.target.dataset.colName){
      filterDispatch({type:filterActions.SORT, payload:{colName}})
    }
  };

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr onClick={handleClick}>
        <th scope="col" className="p-4">
          <ChceckBox
            id="all"
            selected={isAllSelected}
            handleChange={handleSelection}
          />
        </th>
        <th scope="col" className="px-6 py-3" data-col-name="name">
          Name
        </th>
        <th scope="col" className="px-6 py-3" data-col-name="email">
          Email
        </th>
        <th scope="col" className="px-6 py-3" data-col-name="role">
          Role
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
};
