import React from "react";

function FlipButton({setIsFrontOfCard}) {
    const flipCardHandler = () => {
        setIsFrontOfCard((currentSide)=> !currentSide)
    }
  return (
    <button type="button" onClick={flipCardHandler}>
        Flip
    </button>
  )
}

export default FlipButton;