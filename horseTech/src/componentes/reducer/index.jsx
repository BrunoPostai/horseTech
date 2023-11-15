import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
    return alert("show modal");
    //return <div style={{ backgroundColor: "red" }}> Modal</div>;
    case "GET_SELAS":
    return alert("show selas");
    default:
      return state;
  }
};

const selas = {};

export function ModalTest() {
  const [state, dispatch] = useReducer(reducer, selas);
  const handleShowModal = async () => {
    await dispatch({ type: "SHOW_MODAL" });
  };
  const handleShowSelas = async () => {
    await dispatch({ type: "GET_SELAS" });
  };

  return (
    <>
      <button onClick={handleShowModal}>SHOWMODAL</button>
      <button onClick={handleShowSelas}>SHOWSELAS</button>
    </>
  );
}
