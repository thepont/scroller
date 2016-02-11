import React from 'react';
export class ScrollLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translation: 0 };
    this.handleScroll = this.handleScroll.bind(this);
    console.log(props);
  }
  handleScroll(){
    console.log(window.scrollY);
    this.setState({
          translation:window.scrollY
    });
  }
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    
    var style = {
        transform: `translate3d(${this.state.translation}px,0px,0px)`
    };
    console.log('render', style)
    return (
    <div style={style} >
        TEST {style.transform}
    </div>)
  }
}
