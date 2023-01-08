import './App.css';
import Card from './Card';

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

let cardsInfo = JSON.parse(jsonCards);

function App() {
  return (
    <div className="App">
      {cardsInfo.map(
        (card) => {
          return (
            < Card card={card} bodySection1Color={'lightgray'} />)
        })}
    </div>
  );
}

export default App;

