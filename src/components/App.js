import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';
import { OPERATIONS } from '../utilities/constants';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      next: null,
      operation: null,
      total: null,
      finish: false,
    };
  }

  handleClick(buttonName) {
    const { finish, total } = this.state;

    if (!finish) {
      this.setState(prevState => Calculate(prevState, buttonName));
    } else {
      this.setState({
        next: total,
        operation: OPERATIONS.includes(buttonName) ? buttonName : null,
        finish: false,
      });
    }
  }

  render() {
    const {
      next, operation, total, finish,
    } = this.state;
    return (
      <div className="calculator">
        <Display
          next={next}
          operation={operation}
          total={total}
          finish={finish}
        />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
