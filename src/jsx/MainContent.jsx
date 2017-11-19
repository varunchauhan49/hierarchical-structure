import React, { Component } from 'react';
import Node from './Node.jsx'

class MainContent extends Component {
  render() {
    return (
      <div id="main-content">
        <div className="tree">
          <ul>
            <Node data={this.props.companyData} />
          </ul>
        </div>
      </div>
    );
  }
}

export default MainContent;