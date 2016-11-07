import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import { browserHistory } from 'react-router';

class SearchDivs extends Component {

  _goShowOne (gif) {
    this.props.setCurrentGif(gif);
    browserHistory.push(`/${gif.id}`);
  }

  render () {
    let { giphySearch } = this.props;
    console.log('this.props in SearchDivs: ', this.props);
    return (
      <div className='text-center'>
      {
        giphySearch.map((gif, i) => (
          <div key={gif.id} className='col-xs-3 searchImageContainer'><img id={gif.id} onClick={this._goShowOne.bind(this, gif)} className='searchImage' src={gif.images.fixed_height.url} /></div>
        ))
      }
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  giphySearch: state.giphySearch
});

let mapDispatchToProps = (dispatch) => ({
  setCurrentGif (currGif) {
    dispatch(SearchActions.setCurrentGif(currGif));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchDivs);
