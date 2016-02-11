import React from 'react';
export class ScrollLayer extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { translation: 0 };
    this.calculateX = this.calculateX.bind(this);
    //console.log(props);
  }
  calculateX(){
    var {currentScroll} = this.props;
    var {step} = this.props;
    return step * currentScroll;
  }
//   componentDidMount(){
//       window.addEventListener('scroll', this.handleScroll);
//   }(
  
  render() {
    var translateX = this.calculateX();
    console.log('x:', translateX, 'image', this.props.image)
    var style = {
        transform: `translate3d(${translateX}px,0px,0px)`,
        backgroundImage:  `url("${this.props.image}")`,
        width: 3000,
        height: 516,
        zIndex: this.props.zIndex,
        top: '0px',
        left: '0px',
        position: 'absolute',
       // transition: '10ms'
    };
    return (
    <div style={style}/>)
  }
}
