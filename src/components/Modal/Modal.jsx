import React,{ useEffect } from "react";
import styles from './modal.module.css';
import PropTypes from "prop-types";


function Modal(props){

    const {image, onClose} = props; 
    
    useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
          document.removeEventListener("keydown", handleKeyDown);
      };
  });

  const handleKeyDown = (event) => {
      if (event.code === "Escape") {
          onClose();
      }
  };
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
};
 
export default Modal;