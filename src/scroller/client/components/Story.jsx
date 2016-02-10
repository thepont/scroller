import React from 'react';
export class Story extends React.Component {
  constructor(props) {
    super(props);
    
    //console.log(props);
    //
    this.state = {
        scrollX:0,
        props: props
    }
    var style = {
        height: props.height
    }
  }
  handleScroll(){
    var node = this.getDOMNode();
    this.state = {
          ... this.state,
          scrollX:node.scrollTop
    };
  }
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return <div style={height: height} >Hello {this.state.scrollX}</div>;
  }
}
