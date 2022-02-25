import React from "react";
import "./styles.css";
import wallpapers from "..fetch/api/fetch";

export default function Content() {
  return (
    <div className="content">
      {wallpapers.map((wallpaper) => {
        return (
          <div className="wallpaper" key={wallpaper.id}>
            <img src={wallpaper.img} alt={wallpaper.title} />
            <div className="data">
              <h3>{wallpaper.title}</h3>
              <a href={wallpaper.img} target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
