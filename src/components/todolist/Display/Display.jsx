import React, { useRef, useState } from "react";
import "./Display.css";

export const Display = ({ dataItems, deleteItems, editItem }) => {
  const [completedItems, setCompletedItems] = useState([]);

  const completed = (id) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  console.log(completedItems);
  
  return (
    <div className="display-main-container">
      {dataItems.map((data) => {
        const isCompleted = completedItems[data.id] || false;

        return (
          <div className="display-container" key={data.id}>
            <p
              onClick={() => completed(data.id)}
              style={{ textDecoration: isCompleted ? "line-through" : "none" }}
            >
              {data.text}
            </p>
            <div className="button-container" key={data.id}>
              <img
                src={"/images/edit.png"}
                alt=""
                onClick={() => editItem(data.id)}
              />

              <img
                src={"/images/delete.png"}
                alt=""
                onClick={() => deleteItems(data.id)}
              />
            </div>
          </div>
        );
      })}

      <p>
        ------------------------------------------------------------------------------
      </p>
    </div>
  );
};
