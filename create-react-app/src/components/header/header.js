import React, { Component } from 'react';
import  './header.css';

export default class Header extends Component {

  render (){
    return <div className="header">
      <div className="header-left">
        <div className="circle-small"/>
        <div className="rectangle-small"/><br/>
      </div>
      <div className="header-right">
        <div className="header-right__block rectangle-medium"/>
        <div className="header-right__block rectangle-medium"/>
        <div className="header-right__block rectangle-medium"/>
        <div className="header-right__block rectangle-medium"/>
      </div>
    </div>;
  }
}