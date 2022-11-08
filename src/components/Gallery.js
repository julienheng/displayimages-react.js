import React from "react";

//Beach Images
import beach1 from "../images/beach1.jpeg";
import beach2 from "../images/beach2.jpeg";
import beach3 from "../images/beach3.jpeg";
import beach4 from "../images/beach4.jpeg";
import beach5 from "../images/beach5.jpeg";
import beach6 from "../images/beach6.jpeg";
import beach7 from "../images/beach7.jpeg";
import beach8 from "../images/beach8.jpeg";

//Mountain Images
import mt1 from "../images/mt1.jpeg";
import mt2 from "../images/mt2.jpeg";
import mt3 from "../images/mt3.jpeg";
import mt4 from "../images/mt4.jpeg";
import mt5 from "../images/mt5.jpeg";
import mt6 from "../images/mt6.jpeg";
import mt7 from "../images/mt7.jpeg";
import mt8 from "../images/mt8.jpeg";

//Bird Images
import bird1 from "../images/bird1.jpeg";
import bird2 from "../images/bird2.jpeg";
import bird3 from "../images/bird3.jpeg";
import bird4 from "../images/bird4.jpeg";
import bird5 from "../images/bird5.jpeg";
import bird6 from "../images/bird6.jpeg";
import bird7 from "../images/bird7.jpeg";
import bird8 from "../images/bird8.jpeg";

//Food Images
import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";
import food3 from "../images/food3.jpeg";
import food4 from "../images/food4.jpeg";
import food5 from "../images/food5.jpeg";
import food6 from "../images/food6.jpeg";
import food7 from "../images/food7.jpeg";
import food8 from "../images/food8.jpeg";

function Gallery({ item }) {
  //Store all images
  const IMAGES = {
    Mountain: [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8],
    Beaches: [beach1, beach2, beach3, beach4, beach5, beach6, beach7, beach8],
    Birds: [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8],
    Food: [food1, food2, food3, food4, food5, food6, food7, food8],
  };

  return (
    <div>
      <h1 className="m-5 text-center text-3xl font-bold">{`${item} Pictures`}</h1>
      <div className="grid grid-cols-4 gap-4">
        {Object.values(IMAGES[item]).map((image) => (
          <div>
            <img className="object-cover w-full w-60 h-48" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
