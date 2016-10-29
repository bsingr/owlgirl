import React from 'react';
import ReactDOM from 'react-dom';
import Owl from './Owl';
import Moving from './Moving';
import Minimap from './Minimap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      out: false,
      position: {x: 0, y: 0}
    };
  }
  onMove(x, y) {
    let out = false;
    if (this.state.position.x < -50 ||
        this.state.position.x > window.innerWidth ||
        this.state.position.y < -50 ||
        this.state.position.y > window.innerHeight) {
      out = true;
    }
    this.setState({
      out,
      position: {x, y}
    });
  }
  render() {
    let message = false;
    if (this.state.out) {
      message = <h1>Congraz! U broke out!</h1>;
    }
    return (
      <div>
        {message}
        <Minimap {...this.state.position} />
        <Moving onUpdate={this.onMove.bind(this)}>
          <Owl />
        </Moving>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
