import axios from 'axios';

export function searchGifs (searchTerm, rating) {
  if (rating === undefined) {
    return {
      type: 'GIPHY_SEARCH',
      payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then((res) => res.data.data)
    };
  }
  return {
    type: 'GIPHY_SEARCH',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=${rating}&api_key=dc6zaTOxFJmzC`)
    .then((res) => res.data.data)
  };
}

export function setCurrentGif (currGif) {
  return {
    type: 'SET_CURRENT_GIF',
    payload: currGif
  };
}

export function filterByRating (rating) {
  console.log('rating in actions: ', rating);
  return {
    type: 'FILTER_GIFS',
    payload: rating
  };
}
