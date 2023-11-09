import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const getModal = () => {
  return (<div style={{ backgroundColor: "red" }}> Modal</div>);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};


const showModal = {
    type: "SHOW_MODAL",
    payload: getModal,
  };


export function ModalTest() {
  const [state, dispatch] = useReducer(reducer, {});

  const handleShowModal = () => {
    dispatch(showModal);
  };


  return (
    <>
      <button onClick={handleShowModal}>SHOWMODAL</button>
    </>
  );
}
