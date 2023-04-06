import React from "react";
import styles from './modal.module.css';
import PropTypes from "prop-types";


class Modal extends React.Component {
 
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }


 handleKeyDown = (event) => {
      if (event.code === "Escape") {
        this.props.onClose();
      }
  };
  
  render() {
    const { image, onClose } = this.props;
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
};
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
};
 
export default Modal;