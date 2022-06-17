import React from "react";
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal.js";


const App = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const loginHandler = () => {
    setModalIsOpen = (true);
    console.log('clicked')
  };
  return (
    <div>
      <div className="action">
        <Button text="Hello" onClick={loginHandler} />
      </div>
      {modalIsOpen && <Modal />}
    </div>
  );
  
};
export default App;
