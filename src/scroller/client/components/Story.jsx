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

const PageDetails = {
    tallouse: {
        locationX: 0,
        previous: '/story/tallouse',
        next: '/story/grenoble'
    },
    grenoble: {
        locationX: 9600,
        previous: '/story/tallouse',
        next: '/story/duck1'
    },
    duck1: {
        locationX: 10300,
        previous: '/story/grenoble',
        next: '/story/duck2'
    },
    duck2: {
        locationX: 12000,
        previous: '/story/duck1',
        next: '/story/melbourne'
    },
    melbourne: {
        locationX: 12001,
        previous: '/story/duck2',
        next: '/story/outback'
    },
    outback: {
        locationX: 14500,
        previous: '/story/melbourne',
        next: '/story/tallouse'
    }
}

import {Link} from 'react-router';

export class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state={scrollY:0};
    this.handleScroll = this.handleScroll.bind(this);
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
    if(this.props.params){
        var {id} = this.props.params;
    }
    var style = {
        height: this.props.height,
        backgroundColor: 'black'
    }
    var fixedStyle = {
        position: 'fixed',
        top: 'calc(50% - 257px)',
        height: '514px',
        width: '100%',
    }
    var centerStyle = {
        position: 'absolute',
        
    }
    var skyBlue = {
         backgroundColor: '#7EC0EE',
         height: '100%',
         width: '100%'
    }
    
    var pageDetails = PageDetails[id] || PageDetails['tallouse'];
    
    return <div style={style} >
                <div style={fixedStyle}>
                    <div style={skyBlue}>
                        <ScrollLayer zIndex={0} step={-0.08} currentScroll={pageDetails.locationX} width={3228}  image={'/images/mountain.png'} startX={0} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={1} step={-0.1} currentScroll={pageDetails.locationX} width={2221} image={'/images/bg1.png'} startX={0} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={2} step={-0.17} currentScroll={pageDetails.locationX} width={3228} image={'/images/rail.png'} startX={0} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={3} step={-0.102} currentScroll={pageDetails.locationX} width={2221} image={'/images/train.png'} startX={0} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={4} step={-0.2} currentScroll={pageDetails.locationX} width={3228} image={'/images/fg1.png'} startX={0} stopX={PageDetails.grenoble.locationX}/>
                        <ScrollLayer zIndex={4} step={-0.228} currentScroll={pageDetails.locationX} width={3228} image={'/images/fg2.png'} startX={0} stopX={PageDetails.grenoble.locationX}/>
                        
                        
                        <ScrollLayer zIndex={0} step={-0.5} currentScroll={pageDetails.locationX} width={3000} image={'/images/clouds1.png'} startX={9601} stopX={12000}/>
                        <ScrollLayer zIndex={1} step={-0.1} currentScroll={pageDetails.locationX} width={667} image={'/images/duck1.png'} startX={10000} stopX={10300}/>
                        <ScrollLayer zIndex={3} step={-1.2} currentScroll={pageDetails.locationX} width={3000} image={'/images/clouds2.png'} startX={9601} stopX={12000}/>
                        <ScrollLayer zIndex={1} step={-0.01} currentScroll={pageDetails.locationX} width={731} image={'/images/duck2.png'} startX={10301} stopX={12000}/>
                        
                        <ScrollLayer zIndex={0} step={-0.3} currentScroll={pageDetails.locationX} width={900} image={'/images/melbounesky.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={1} step={-0.41} currentScroll={pageDetails.locationX} width={3400} image={'/images/trees2.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={2} step={-0.45} currentScroll={pageDetails.locationX} width={3400} image={'/images/trees1.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={3} step={-0.5} currentScroll={pageDetails.locationX} width={3400} image={'/images/fedsq.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={4} step={-0.54} currentScroll={pageDetails.locationX} width={900} image={'/images/flinders.png'} startX={12001} stopX={14500}/>
                        <ScrollLayer zIndex={5} step={0.02} currentScroll={pageDetails.locationX} width={3400} image={'/images/car.png'} startX={12001} stopX={14500}/>
                        
                    </div>
                    
                <Link to={pageDetails.previous}>Previous</Link> 
                <Link to={pageDetails.next}>Next</Link>        
                </div>
                
        </div>
  }
}
