import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";

import CreateDeckBreadcrumbNavBar from "./CreateDeckBreadcrumbNavBar";
import CreateDeckCancelButton from "./CreateDeckCancelButton";

export default function CreateDeckScreen() {
   const [deckName, setDeckName]= useState("");
   const [deckDescription, setDeckDescription] = useState("");
   const history = useHistory();

   const handleDeckNameChange = (event) => setDeckName(event.target.value);
   const handleDeckDescriptionChange = (event) =>
     setDeckDescription(event.target.value);
  
  const handleCreateDeckSubmit = (event) => {
    event.preventDefault()
    createDeck({
        name: deckName,
        description: deckDescription
    })
    history.push("/")
     
  }


    return (
    <div>CreateDeckScreen</div>
  )
}

