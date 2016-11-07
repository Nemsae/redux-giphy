import React, { Component } from 'react';
import SearchForm from './SearchForm';

export default class Layout extends Component {
  render () {
    return (
      <div className='container'>
        <h1 className='text-center'>Giphy Redux</h1>
        <SearchForm />
      </div>
    );
  }
}
