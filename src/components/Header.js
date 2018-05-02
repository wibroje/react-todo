import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header className="App-header">
          
          <h1 className="App-title">Es todo List!</h1>
          <Link to={'/'}>Home </Link>
          <Link to={'/todos'}> To-Do</Link>
        </header>
    );
  }
}

export default Header;


