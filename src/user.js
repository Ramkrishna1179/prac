import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function user(props) {
  let name = "Ram Yadav";

  return (
    <div className="text-center">
      <button
        className="btn btn-success w-25 rounded-pill"
        onClick={() => {
          props.show(name);
        }}
      >
        click
      </button>
    </div>
  );
}
