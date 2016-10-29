import React from 'react';
import ReactDOM from 'react-dom';
import Owl from './owl';
import Moving from './moving';

class App extends React.Component {
  render() {
    return (
      <Moving>
        <Owl />
      </Moving>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
