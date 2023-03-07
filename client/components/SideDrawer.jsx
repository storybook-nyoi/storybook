import React from "react";
import ListItem from "./ListItem.jsx";

export default function SideDrawer() {
  const storyThemes = ["Princess", "Ninjas", "Horses", "Pirates", "Explorers"];
  const storyThemeComponents = [];

  for (let i = 0; i < storyThemes.length; i++) {
    storyThemeComponents.push(
      <ListItem
        key={storyThemes[i]}
        name={storyThemes[i]}
      />
    );
  }

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
      />
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {storyThemeComponents}
      </ul>
    </div>
  );
}
