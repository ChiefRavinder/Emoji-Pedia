import React from "react";
import Card from "./card";

import emojipedia from "../emojipedia";

function createCard(card){
  return <Card key={card.id} emoji={card.emoji}  Title={card.name} Description={card.meaning} />
}

function App(){
    return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createCard)}
      {/* <Card emoji='💪' Title='Tense Biceps' Description='“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.' />
      <Card emoji='🙏' Title='Person With Folded Hands' Description='Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.' />
      <Card emoji='🤣' Title='Rolling On The Floor, Laughing' Description='This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.'></Card> */}
      </dl>
    </div>)
}

export default App;