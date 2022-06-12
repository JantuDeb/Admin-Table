import { useState } from "react";
import { useUsers } from "../../context/users/user-context";
import { ChceckBox } from "../checkbox/ChceckBox";
import { EditForm } from "../forms/EditForm";

export const TableRow = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const { name, email, role, selected } = user;
  const { selectUser, deleteUser } = useUsers();
  const handleChange = () => selectUser(user.id);

  return editing ? (
    <EditForm
      user={user}
      checkboxChangeHandler={handleChange}
      setEditing={setEditing}
      editing={editing}
    />
  ) : (
    <tr
      className={`${
        selected ? "dark:bg-gray-600" : "dark:bg-gray-800"
      } bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
    >
      <td className="w-4 p-4">
        <ChceckBox handleChange={handleChange} selected={user.selected} />
      </td>
      <td className="px-6 py-2">{name}</td>
      <td className="px-6 py-2">{email}</td>
      <td className="px-6 py-2">{role}</td>
      <td className="px-6 py-2 text-right flex gap-2">
        <button className="w-6" onClick={() => setEditing(true)}>
          <img src="assets/user.png" alt="edit user" className="w-6 h-6" />
        </button>
        <button className="w-6" onClick={() => deleteUser(user.id)}>
          <img src="assets/delete.png" alt="delete user" className="w-6 h-6" />
        </button>
      </td>
    </tr>
  );
};
