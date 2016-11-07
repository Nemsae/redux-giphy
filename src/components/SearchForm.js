import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import SearchDivs from './SearchDivs';

class SearchForm extends Component {
  constructor () {
    super();

    this.state = {
      search: '',
      rating: ''
    };
    this._grabInput = this._grabInput.bind(this);
    this._searchGifs = this._searchGifs.bind(this);
  }

  _grabInput (e) {
    let value = e.target.value;
    let input = e.target.id;
    this.setState({
      [input]: value
    });
  }

  _searchGifs () {
    let { search, rating } = this.state;
    this.props.searchGifs(search, rating);
    this.refs.search.value = '';
    this.refs.rating.value = '';
  }

  _filter () {
    let currRating = this.refs.ratingType.value;
    console.log('currRating: ', currRating);
    currRating = currRating.toLowerCase();
    this.props.filterByRating(currRating);
  }

  _reset () {
    let { search, rating } = this.state;
    this.props.searchGifs(search, rating);
  }

  render () {
    console.log('this.props in SearchForm: ', this.props);
    return (
      <div>
        <div className='text-center'>
          <input type='text' ref='search' id='search' onChange={this._grabInput} placeholder='Gif Category' />
          <input type='text' ref='rating' id='rating' onChange={this._grabInput} placeholder='Rating of Search' />
          <button onClick={this._searchGifs}>Search Gifs</button>
          <div>
            <input ref='ratingType' type='text' placeholder='Filter by rating' />
            <button onClick={this._filter.bind(this)}>Filter</button>
            <button onClick={this._reset.bind(this)}>Reset Filter</button>
          </div>
        </div>
        <SearchDivs />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  giphySearch: state.giphySearch
});
let mapDispatchToProps = (dispatch) => ({
  searchGifs (searchTerm, rating) {
    dispatch(SearchActions.searchGifs(searchTerm, rating));
  },

  filterByRating (rating) {
    dispatch(SearchActions.filterByRating(rating));
  }

});
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
