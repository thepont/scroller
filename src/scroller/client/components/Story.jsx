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
        height: this.props.height,
        backgroundColor: '#7EC0EE'
    }
    var fixedStyle = {
        position: 'fixed'
    }
    return <div style={style} >
                <div style={fixedStyle}> Hello {this.state.scrollY}
                    <ScrollLayer zIndex={0} step={-0.04} currentScroll={this.state.scrollY} image={'/images/mountain.png'}/>
                    <ScrollLayer zIndex={1} step={-0.05} currentScroll={this.state.scrollY} image={'/images/bg1.png'}/>
                    <ScrollLayer zIndex={2} step={-0.085} currentScroll={this.state.scrollY} image={'/images/rail.png'}/>
                    <ScrollLayer zIndex={3} step={-0.051} currentScroll={this.state.scrollY} image={'/images/train.png'}/>
                    <ScrollLayer zIndex={4} step={-0.1} currentScroll={this.state.scrollY} image={'/images/fg1.png'}/>
                    <ScrollLayer zIndex={4} step={-0.114} currentScroll={this.state.scrollY} image={'/images/fg2.png'}/>
                </div>        
        </div>
  }
}
