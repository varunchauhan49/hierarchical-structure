import React, { Component } from 'react';
import NodeList from './NodeList.jsx';

class Node extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expand:false
    };
  }
  handleExpand(){
    if(this.props.data.reportees.length>0){
      this.setState({expand:!this.state.expand})
    }
  }
  render() {
    var userIcon = {
      marginLeft: '45%',
      color:(this.state.expand)?'#3597ca':'black'
    }
    var mapIcon = {
      color:(this.state.expand)?'#3597ca':'black'
    }
    var userCount = {
      marginLeft: '32%',
      width: '20%',
      display: 'inline-block',
      textAlign: 'left'
    }
    var directCount = {
      width: '20%',
      display: 'inline-block',
      textAlign: 'left'
    }
    var plusIcon = {
      marginLeft: '26%',
      position: 'absolute',
      marginTop: '5%',
      color:(this.state.expand)?'#3597ca':'black'
    }
    var pencilIcon = {
      marginLeft: '43%'
    }
    var trashIcon = {
      marginLeft: '32%',
      color:(this.state.expand)?'#de6e74':'black'
    }
    var heading = {
      backgroundColor:(this.state.expand)?'#238b88':'white',
      color:(this.state.expand)?'white':'black'
    }
    var userPlusIcon = {
      color: (this.state.expand)?'#5aaa74':'black'
    }
    return (
      <li>
        <a>
          <div className="panel panel-default" style={{width:'15vw',margin: '0 auto',cursor:'pointer'}}
            onClick={this.handleExpand.bind(this)}>
            <div className="panel-heading" style={heading}>{this.props.data.team_name}</div>
            <div className="list-group">
              <div className="list-group-item">
                <span className="employee-name">{this.props.data.name}</span>
                <span className="employee-desg">{this.props.data.deignation}</span>
              </div>
              <div className="list-group-item">
                <div style={{padding:'0px 0px 0px 8%',textAlign:'left'}}>
                  <i className="fa fa-sitemap" style={mapIcon} aria-hidden="true"></i>
                  <i className="fa fa-user" style={userIcon} aria-hidden="true"></i>
                  <i className={(this.state.expand)?"fa fa-minus-circle":"fa fa-plus-circle"}
                   style={plusIcon} aria-hidden="true"></i>
                </div>
                <div style={{padding: '0px 0px 0px 7%',textAlign:'left'}}>
                  <div style={directCount}>{this.props.data.direct_reportees}</div>
                  <div style={userCount}>{this.props.data.team_size}</div>
                </div>
              </div>
              <div className="list-group-item">
                <div style={{padding:'0px 0px 0px 6%'}}>
                  <i className="fa fa-user-plus" style={userPlusIcon} aria-hidden="true"></i>
                  <i className="fa fa-pencil" style={pencilIcon} aria-hidden="true"></i>
                  <i className="fa fa-trash" style={trashIcon} aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
        {
          (this.state.expand)?
            <NodeList childs={this.props.data.reportees} />:false
        }
      </li>
    );
  }
}

export default Node;