import React, { Component } from 'react';
import styles from './app.module.css';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
import { fetchImage } from '../../Api/api.js';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';

 class App extends Component {
  state = { 
    search: "",
    page: 1,
    cards: [],
    error: null,
    isLoading: false,
    showModal: false,
    largeImageURL: "",
    webformatURL: "",
  } 


  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search || this.state.page !== prevState.page) {
      this.fetchSearch(this.state.search, this.state.page);
    }
  }

   searchSubmit = (search) => {
        if (search !== this.state.search) {

            this.setState({ cards: [], page: 1, search });
        }
  };
  
  fetchSearch = async (value) => {
    this.setState({ isLoading: true, error: null });
    try {
      const res = await fetchImage(value, this.state.page);
      this.setState((prevState) => ({
        cards: [...prevState.cards, ...res]
      }));
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  clickButton = () => {
    this.setState({ page: this.state.page + 1 });
  }
  modalShow = (url) => {
    this.setState({ showModal: true, largeImageURL: url });
  }

 modalClose = () => {
    this.setState({ showModal: false, largeImageURL: "" });
  }
  
  render() { 
    const { cards, isLoading, largeImageURL, showModal } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.searchSubmit} />
        {cards.length > 0 && <ImageGallery cards={cards} onShow={this.modalShow} />}
        {isLoading && <Loader />}
        {cards.length > 0 && !isLoading ? (
          <Button onClick={this.clickButton} />) : ("")}
        {showModal && (
          <Modal onClose={this.modalClose} image={largeImageURL} />)}
      </div>
    );
  }
}
export default App;