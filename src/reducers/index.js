import { combineReducers } from 'redux';

import giphySearch from './giphySearch';
import currentGif from './currentGif';

export default combineReducers({
  giphySearch,
  currentGif
});
