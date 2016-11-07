import React, { Component } from 'react';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class ShowOne extends Component {

  _goHome () {
    browserHistory.push('/');
  }

  render () {
    let { currentGif } = this.props;
    console.log('this.props in ShowOne: ', this.props);
    return (
      <div className='text-center'>
        <h1 onClick={this._goHome.bind(this)}>Go Home</h1>
        <h5>Rating: {currentGif.rating}</h5>
        <h5>Slug: {currentGif.slug}</h5>
        <img src={currentGif.images.original.url} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  giphySearch: state.giphySearch,
  currentGif: state.currentGif
});

let mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowOne);
