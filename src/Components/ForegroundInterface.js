import React from "react";
import { useState } from "react";
import {DialogueData} from "./data";


const ForegroundInterface = ({data}) => {

  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevClick = () => {
    setCurrent(current === 0 ? length - 1 : current -1);
  }
  if(!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div className="foreground-ui">
        {DialogueData.map((datum, index) => {
            return (
              <section key={index}>
                <div className="img-div">
                  {index === current && (<img src={datum.spritePath} alt={datum.name} className="character-img"/>)}
                </div>
                <div className={index === current ? "dialogue-ui":"dialogue-ui-2"}> 
                  <h2>{index === current && datum.name}</h2>
                  <h4>{index === current && datum.dialogue}</h4>
                </div>
              </section>
            )
        })}

        <button className="prev-btn" onClick={prevClick}>PREV</button>
        <button className="next-btn" onClick={nextClick}>NEXT</button>
    </div>
  );
};

export default ForegroundInterface;
