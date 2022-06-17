import React from "react"
import Button from "./Button"
import './Modal.css'
const Modal = (props) => {
    const {text} = props
    return(
        <div className="modalContainer">
            <div className="modal">
                <h1>{text}</h1>
                <Button text="Login"/>
                <Button text="Cancel"/>
            </div>
        </div>
          )
}

export default Modal