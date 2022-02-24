import React, { useState, useEffect } from "react";
import "./styles.css";
import { getWallpapers } from "../api/fetch";

export default function Content() {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWallpapers().then((data) => {
      setWallpapers(data);
      setLoading(false);
    });
  }, []);

  return <div className="content">
    {loading ? <div>Loading...</div> : <div>
        {wallpapers.map((wallpaper) => {
            return <div className="wallpaper" key={wallpaper.id}>
                <img src={wallpaper.img} alt={wallpaper.title} />
                <div className="data">
                <h3>{wallpaper.title}</h3>
                <a href={wallpaper.img} target="_blank" rel="noopener noreferrer">
                    Download
                </a>
                </div>
            </div>
        })}
    </div>}
  </div>;
}
