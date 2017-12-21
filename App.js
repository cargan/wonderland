import React, { Component } from 'react';
import './App.css';

const COLORS = [
  'gray', 'red', 'olive', 'blue', 'orange', 'yellow'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'gray',
      timer: null
    };
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  onColorClick() {
    const idx = COLORS.indexOf(this.state.bgColor);
    if (idx !== COLORS.length - 1) {
      this.setState({'bgColor': COLORS[(idx+1)]});
    } else {
      this.setState({'bgColor': COLORS[0]});
    }
  }

  onBlinkClick() {
    if (!this.state.timer) {
      this.setState({
        timer: setInterval(this.onColorClick.bind(this), 750)
      });
    } else {
      clearInterval(this.state.timer);
      this.setState({timer: null});
    }
  }

  render() {
    const appClasses = 'App ' + this.state.bgColor;
    return (
      <div className={appClasses}>
        <ul className='navigation'>
          <li onClick={() => this.onColorClick()}><a>Change Color</a></li>
          <li onClick={() => this.onBlinkClick()}><a>Blink</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
