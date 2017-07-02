import React from 'react';
import ReactDOM from 'react-dom'
export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
      <a className="fcc-link" href="https://freecodecamp.com">  <h1>FCC Project, HackerRank rankings</h1></a>
        </div>
      </nav>
    );
  }
}
