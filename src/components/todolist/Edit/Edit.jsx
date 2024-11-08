import React, { useEffect, useState } from "react";
import "./Edit.css";

export const Edit = ({ editingData, editData }) => {
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (editingData && editingData[0]?.text) {
      setEditText(editingData[0].text);
    }
  }, [editingData]);

  return (
    <div>
      <div className="edit-container">
        <input
          type="text"
          placeholder="Editing Current Todo Item"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <div className="buttons">
          <button
            onClick={() => {
              editData(editText, editingData[0]?.id);
              setEditText("")
            }}
          >
            SAVE
          </button>
          <button onClick={() => setEditText("")}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};
