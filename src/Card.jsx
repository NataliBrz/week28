import React, { useState } from "react";



function Card({ bodySection1Color, card }) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    document.querySelectorAll('.oneCardStyle').forEach(function (el) {
      el.classList.remove('border');
    });
    setPressed(!pressed)
  }



  return (
    <div className="Card">{
      <div className={['oneCardStyle', pressed ? "border" : null].join(' ')} onClick={handleChange}>
        <div className={["head", card.headColorClass].join(' ')}>{card.head}</div>
        <div className={["cardBody", card.bodyColorClass].join(' ')}>{card.body}</div>
        <div className="bodySection1">{card.bodySection1}</div>
        <div className="bodySection1" style={{ backgroundColor: bodySection1Color }}>{card.bodySection2}</div>
      </div>
    }
    </div >
  );
}

export default Card;

