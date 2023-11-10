import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      alert("show modal");
    //return <div style={{ backgroundColor: "red" }}> Modal</div>;
    case "GET_SELAS":
      alert("show selas");
     //return state;
    default:
      return state;
  }
};

const selas = {};

export function ModalTest() {
  const [state, dispatch] = useReducer(reducer, selas);
  const handleShowModal = async () => {
    const content = await dispatch({ type: "SHOW_MODAL" });
  };
  const handleShowSelas = async () => {
    const content = await dispatch({ type: "GET_SELAS" });
  };

  return (
    <>
      <button onClick={handleShowModal}>SHOWMODAL</button>
      <button onClick={handleShowSelas}>SHOWSELAS</button>
    </>
  );
}
