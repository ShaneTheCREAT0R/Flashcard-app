import React from "react";

export default function NextButton({ NextCardHandler }) {
  return (
    <button type="button" className="btn btn-success" onClick={NextCardHandler}>
      Next
    </button>
  );
}