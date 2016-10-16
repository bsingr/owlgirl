import React from 'react';
import ReactDOM from 'react-dom';
import Owl from './owl';

const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0, move: {x: 0, y: 0}};
  }
  componentDidMount() {
    document.addEventListener("keyup", this.onKeyUp.bind(this), false);
    document.addEventListener("keydown", this.onKeyDown.bind(this), false);
    setInterval(() => {
      this.setState({
        x: this.state.x + this.state.move.x,
        y: this.state.y + this.state.move.y,
      });
    }, 5);
  }
  onKeyDown(e) {
    if (e.keyCode === keys.left) {
      this.setState({move: Object.assign({}, this.state.move, {x: -1})});
    } else if (e.keyCode === keys.up) {
      this.setState({move: Object.assign({}, this.state.move, {y: -1})});
    } else if (e.keyCode === keys.down) {
      this.setState({move: Object.assign({}, this.state.move, {y: 1})});
    } else if (e.keyCode === keys.right) {
      this.setState({move: Object.assign({}, this.state.move, {x: 1})});
    }
  }
  onKeyUp(e) {
    if (e.keyCode === keys.left) {
      this.setState({move: Object.assign({}, this.state.move, {x: 0})});
    } else if (e.keyCode === keys.up) {
      this.setState({move: Object.assign({}, this.state.move, {y: 0})});
    } else if (e.keyCode === keys.down) {
      this.setState({move: Object.assign({}, this.state.move, {y: 0})});
    } else if (e.keyCode === keys.right) {
      this.setState({move: Object.assign({}, this.state.move, {x: 0})});
    }
  }
  render() {
    return (
      <div
        style={{
          position: 'absolute', top: this.state.y, left: this.state.x
        }}>
        <Owl />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
