import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }

  handleClick(name) {
    let { result } = this.state;
    result = result.slice();
    this.setState({
      result: result.concat(name),
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <Display result={result} />
        <ButtonPanel onClick={name => this.handleClick(name)} />
      </div>
    );
  }
}

export default App;
