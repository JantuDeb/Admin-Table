import React, { useState } from "react";
import { useUsers } from "../../context/users/user-context";
import { ChceckBox } from "../checkbox/ChceckBox";

export const EditForm = ({ user, checkboxChangeHandler, setEditing }) => {
  const [userData, setUserData] = useState({
    name: user.name || "",
    email: user.email || "",
    role: user.role || "",
  });
  const { name, email, role } = userData;
  const { deleteUser, updateUser } = useUsers();
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const saveClickHandler = () => {
    if (name && email && role) {
      updateUser({ name, email, role, id: user.id });
    }
    setEditing(false);
  };
  return (
    <tr className="dark:bg-gray-800 bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <ChceckBox
          selected={user.selected}
          handleChange={checkboxChangeHandler}
        />
      </td>
      <td className="px-6 py-2">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={name}
          onChange={handleInputChange}
          name="name"
        />
      </td>
      <td className="px-6 py-2">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={email}
          onChange={handleInputChange}
          name="email"
        />
      </td>
      <td className="px-6 py-2">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={role}
          onChange={handleInputChange}
          name="role"
        />
      </td>
      <td className="px-6 py-2 text-right flex gap-2 items-center">
        <button
          className="px-2.5 py-1.5 dark:bg-slate-700 rounded-md"
          onClick={saveClickHandler}
        >
          Save
        </button>
        <button onClick={() => deleteUser(user.id)}>
          <img src="assets/delete.png" alt="delete user" className="w-6 h-6" />
        </button>
      </td>
    </tr>
  );
};
