import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import StudyScreenBreadcrumbNavBar from "./StudyScreenBreadcrumbNavBar";
import StudyCard from "./StudyCard";

export default function Study() {
  const {deckId} = useParams()
  const [deck, setDeck] = useState()
 
  useEffect(() => {
    async function loadDeck() {
        const response = readDeck(deckId)
        const deckFromAPI = await response
        console.log(deckFromAPI)
        setDeck(deckFromAPI);
    }
    loadDeck();
    }, []);
  
let cards= []
if (deck) cards = deck.cards


    return (
    <div> 
      {cards.map((card) =>{
        return <StudyCard front={card.front} back={card.back}/>
      })}
     
    </div>
  )
}

