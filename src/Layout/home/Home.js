import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";
// import "./Home.css";

import CreateDeckButton from "./CreateDeckButton";
import ViewDeckButton from "./ViewDeckButton";
import StudyDeckButton from "./StudyDeckButton";
import DeleteDeckButton from "./DeleteDeckButton";

function Home() {
    const [decks, setDecks] = useState([]);

//Loading all the decks from the API
useEffect(() => {
async function loadDecks() {
    const response = listDecks()
    const decksFromAPI = await response
    setDecks(decksFromAPI);
}
loadDecks();
}, []);

return (
    <CreateDeckButton />
)

}

export default Home;