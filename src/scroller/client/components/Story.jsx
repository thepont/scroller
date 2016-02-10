import React from 'react';

// export const Story = React.createClass({
//     getInitialState: function() {
//         return {scrollY: 0};
//     },
//     handleScroll: () => {
//         console.log('hello', window.scrollY)
//         this.setState({
//             scrollY:0
//         })
//     },
//     componentDidMount: () => {
//         window.addEventListener('scroll', this.handleScroll);
//     },
//     render() {
//         var style = {
//             height: this.props.height
//         }
//         return <div style={style}>Hello {this.state.scrollY}</div>;
//     }  
// });
import {ScrollLayer} from './ScrollLayer';

export class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state={scrollY:0};
    this.handleScroll = this.handleScroll.bind(this);
    console.log(props);
  }
  handleScroll(){
    console.log(window.scrollY);
    this.setState({
          scrollY:window.scrollY
    });
  }
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    var style = {
        height: this.props.height
    }
    var fixedStyle = {
        position: 'fixed'
    }
    return (
    <div style={style} >
            <div style={fixedStyle}> Hello {this.state.scrollY}
            <ScrollLayer step={10}/>
        </div>        
    </div>)
  }
}
