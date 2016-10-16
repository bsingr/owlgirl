import React from 'react';
import ReactDOM from 'react-dom';
import Owl from './owl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pos: 0}
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.setState({pos: this.state.pos + 1})
    // }, 10)
  }
  render() {
    return <div style={{position: 'absolute', top: this.state.pos}}>
      <Owl />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
