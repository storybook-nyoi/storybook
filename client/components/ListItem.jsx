import React from "react";

export default function ListItem(props) {
  return (
    <div>
      <button className="btn btn-primary mt-3 w-full">{props.name}</button>
    </div>
  );
}
