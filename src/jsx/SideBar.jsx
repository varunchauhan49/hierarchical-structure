import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand" style={{marginBottom:"65%"}}>
            <div className="sidebar-container">   
              <div className="sidebar-img">
                <img className="img-circle" 
                  src="https://i.pinimg.com/originals/ca/d5/ab/cad5ab0d16f824d8e5028f6b38b7ba39.jpg"
                  alt="mario" />
              </div>
              <span>user@company.com</span>
            </div> 
          </li>
          <li>
            <a>My Team</a>
          </li>
          <li>
            <a>Designations</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;