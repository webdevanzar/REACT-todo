import React, { useState } from "react";
import "./Display.css";

export const Display = ({ dataItems, deleteItems ,editItem}) => {


  return (
    <div className="display-main-container">
      {dataItems.map((data) => {
        return (
          <div className="display-container" key={data.id}>
            <p> {data.text} </p>
            <div className="button-container" key={data.id} >
              <img
                src={"/src/images/edit.png"}
                alt=""
                onClick={() => editItem(data.id)}
              />

              <img
                src={"/src/images/delete.png"}
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
