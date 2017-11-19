import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a>My Team</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;