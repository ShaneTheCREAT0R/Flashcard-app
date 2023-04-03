import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import StudyScreenBreadcrumbNavBar from "./StudyScreenBreadcrumbNavBar";
import StudyCard from "./StudyCard";

export default function Study() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const deckId = useParams().deckId;
 
  // Loading the specified deck from the API
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
      setCurrentCard(deckFromAPI.cards[0]);
    }
    loadDeck();
  }, [deckId]);

    return (
    <div>
      <StudyScreenBreadcrumbNavBar deckId={deckId} deck={deck}/>
     <StudyCard 
        cards={cards} 
        currentCard={currentCard} 
        setCurrentCard={setCurrentCard}
        deckId={deckId} />     
    </div>
  )
}

