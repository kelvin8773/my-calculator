import React from 'react';

import Display from './display';
import ButtonPanel from './button_panel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      history: [],
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center">My Calculator</h1>
        <Display result="100,123" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
