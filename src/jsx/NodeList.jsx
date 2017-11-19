import React, { Component } from 'react';
import Node from './Node.jsx';

class NodeList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      start:0,
      end:(this.props.childs.length>4)?4:this.props.childs.length
    };
  }
  
  handleLeft() {
    if(this.state.start > 0){
      let startValue = this.state.start - 1;
      let endValue = this.state.end - 1;
      this.setState({start:startValue,end:endValue});
    }
  }
  
  handleRight() {
    if(this.state.end < this.props.childs.length){
      let endValue = this.state.end + 1;
      let startValue = this.state.start + 1;
      console.log('End',endValue);
      this.setState({start:startValue,end:endValue});
    }
  }

  render() {
    var list = [];
    console.log();
    for(var j=this.state.start;j<this.state.end;j++){
      list.push(
        <Node key={this.props.childs[j].name + j} data={this.props.childs[j]} />
      )
    }
    return (
      <div>
        {
          (this.props.childs.length>4)?
          <div className="icons">
            <div style={{left:'0',cursor:'pointer',position:'absolute'}} onClick={this.handleLeft.bind(this)}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>{' '}
              <span>({this.state.start})</span>
            </div>
            <div  style={{right:'0',cursor:'pointer',position:'absolute'}} onClick={this.handleRight.bind(this)}>
              <span>({this.props.childs.length - this.state.end})</span>{' '}
              <i className="fa fa-arrow-right" aria-hidden="true" ></i>
            </div>
          </div>:false
        }
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default NodeList;