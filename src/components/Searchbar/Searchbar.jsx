import PropTypes from "prop-types";
import React, { Component } from 'react';
import styles from './searchbar.module.css';
import Notiflix from "notiflix";

class Searchbar extends Component {
  state = { 
    search: '',
  } 


  formChangeInput = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  formSubmit = (event) => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
      Notiflix.Notify.info('Please enter your request in the input field')
      return;
    }
    this.props.onSubmit(this.state.search)
  }

  
  render() { 
    return (
      <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.formSubmit}>
                    <input
                        onChange={this.formChangeInput}
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.search}
                    />
                    <button type="submit" className={styles.SearchFormButton}>&#x1F50D;
                        <span className={styles.SearchFormButtonLabel}>
                            Search
                        </span>
                    </button>
                </form>
            </header>
    );
  }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
 
export default Searchbar;