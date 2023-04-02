import React, { Component } from "react";
import styles from './modal.module.css';
import PropTypes from "prop-types";


class Modal extends Component {

  render() { 
    const {image} = this.props
    return (
      <div className={styles.overlay} onClick={this.props.onClose}>
        <div className={styles.modal}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
    onClose: PropTypes.func,
    image: PropTypes.string.isRequired,
};
 
export default Modal;