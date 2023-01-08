import React, { useState } from "react";

let jsonCards = `[
    {
      "head": "Безлимитный 300",
      "bodyColorClass" : "blue",
      "body": "руб 300 / мес",
      "bodySection1": "до 10 Мбит/сек",
      "bodySection2": "Объем включенного трафика неограничен",
      "headColorClass" : "blue"   
    },
    {
      "head": "Безлимитный 450",
      "headColorClass" : "green",
      "body": "руб 450 / мес",
      "bodyColorClass" : "green",
      "bodySection1": "до 50 Мбит/сек",
      "bodySection2": "Объем включенного трафика неограничен"
    },
    {
      "head": "Безлимитный 550",
      "headColorClass" : "red",
      "body": "руб 550 / мес",
      "bodyColorClass" : "red",
      "bodySection1": "до 100 Мбит/сек",
      "bodySection2": "Объем включенного трафика неограничен"
    },
    {
      "head": "Безлимитный 1000",
      "headColorClass" : "black",
      "body": "руб 1000 / мес",
      "bodyColorClass" : "black",
      "bodySection1": "до 200 Мбит/сек",
      "bodySection2": "Объем включенного трафика неограничен"
    }
  ]`;

let cards = JSON.parse(jsonCards);



function Card({ bodySection1Color }) {

  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed)
  }


  return (
    <div className="Card">{
      cards.map(
        (card) => {
          return (
            <div className='oneCardStyle' onClick={handleChange}>
              {pressed ? " " : "b"}

              <div className={["head", card.headColorClass].join(' ')}>{card.head}</div>
              <div className={["cardBody", card.bodyColorClass].join(' ')}>{card.body}</div>
              <div className="bodySection1">{card.bodySection1}</div>
              <div className="bodySection1" style={{ backgroundColor: bodySection1Color }}>{card.bodySection2}</div>

            </div>
          )
        }
      )
    }

    </div >
  );
}

export default Card;

