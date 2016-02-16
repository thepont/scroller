import React from 'react';
export class ScrollLayer extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { translation: 0 };
    this.calculateX = this.calculateX.bind(this);
    this.calculateVisible = this.calculateVisible.bind(this);
    //console.log(props);
  }
  calculateX(){
    var {currentScroll} = this.props;
    var {startX} = this.props
    var {step} = this.props;
    return step * (currentScroll - startX);
  }
//   componentDidMount(){
//       window.addEventListener('scroll', this.handleScroll);
//   }(
  
  calculateVisible(){
      var {startX} = this.props;
      var {stopX} = this.props;
      var {currentScroll} = this.props;
      return (startX <= currentScroll && stopX >= currentScroll ) ? 1 : 0;
  }
  
  render() {
    var translateX = this.calculateX();
    var {startX} = this.props;
    var {width} = this.props;
    var height = this.props.height || 516;
    
    
    var visible = this.calculateVisible();
    
    var style = {
        transform: `translate3d(${translateX}px,0px,0px)`,
        backgroundImage:  `url("${this.props.image}")`,
        width: width,
        height: height,
        zIndex: this.props.zIndex,
        top: '0px',
        left: '0px',
        position: 'absolute',
        transition: 'transform 6s, opacity 400ms',
        opacity: visible
    };
    return (
    <div style={style}/>)
  }
}
