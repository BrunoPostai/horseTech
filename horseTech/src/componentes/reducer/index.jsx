import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const getModal = () => {
  console.log("getmodal");
  return <div style={{ backgroundColor: "red" }}> Modal</div>;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
        alert('show modal');
        //return <div style={{ backgroundColor: "red" }}> Modal</div>;
    default:
      return state;
  }
};

const showModal = {
  type: "SHOW_MODAL",
  payload: getModal,
};

export function ModalTest() {
  const [state, dispatch] = useReducer(reducer,);
  const [modal, setModal] = useState();

  const handleShowModal = async () => {
    const content = await dispatch(showModal);
  };

  return (
    <>
      <button onClick={handleShowModal}>SHOWMODAL</button>
      <div>{modal}</div>
    </>
  );
}
