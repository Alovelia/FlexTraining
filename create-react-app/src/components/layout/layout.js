import React, { Component } from 'react';
import Header from '../header/header';
import Content from '../content/content';
import List from '../list/list';
//import './layout.css';

export default class Layout extends Component {

  render (){
    return <div className="main-container">
      <Header />
      <Content />
      <List />
    </div>;
  }
}