import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default (initialValue = []) => {
  const [list, setList] = useState(initialValue);

  const addItem = (newItem) => {
    setList([...list, { id: uuidv4(), ...newItem }]);
  };
  const updateItem = (id, updatedItem) => {
    setList(
      list.map((item) =>
        item.id === id
          ? {
              id: item.id,
              ...updatedItem,
            }
          : item
      )
    );
  };
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return [list, addItem, updateItem, deleteItem];
};
