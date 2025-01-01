import React, { useEffect, useState } from "react";
import "./TodoList.css";
import { Add } from "./Add/Add";
import { Display } from "./Display/Display";
import { Edit } from "./Edit/Edit";

export const TodoList = () => {
  const [dataItems, setDataItems] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addItems = () => {
    if (todo.trim()) {
      setDataItems([...dataItems, { id: Date.now(), text: todo }]);
      setTodo("");
    } else {
      setTodo("");
    }
  };

  const deleteItems = (id) => {
    const filteredData = dataItems.filter((data) => {
      return data.id !== id;
    });

    const isConfirmed = window.confirm("do you want delete this item");

    if (isConfirmed) {
      setDataItems([...filteredData]);
    }
  };

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dataItems"));
    if (storedData) {
      setDataItems(storedData);
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("dataItems", JSON.stringify(dataItems));
  }, [dataItems]);

  //display editing value on input
  const [editingData, setEditingData] = useState([]);

  const editItem = (id) => {
    const editableValue = dataItems.filter((data) => {
      return data.id === id;
    });

    setEditingData(editableValue);
  };

  //final updation(edit) the data
  const editData = (updatedData, id) => {
    const finalEdited = dataItems.filter((data) => data.id !== id);

    if (!updatedData) {
      return alert("sfsf");
    }

    setDataItems([...finalEdited, { id: Date.now(), text: updatedData }]);
    setEditingData("");
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <Add handleChange={handleChange} addItems={addItems} value={todo} />
      <Display
        dataItems={dataItems}
        deleteItems={deleteItems}
        editItem={editItem}
      />
      <Edit editingData={editingData} editData={editData} />
    </div>
  );
};
