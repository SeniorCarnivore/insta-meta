import * as React from 'react';
import logo from './logo.svg';

export interface = LoginProps {
  test?: string
}

export interface LoginState {
  test: number
}

class Login extends React.Component {
  public static defaultProps: Partial<LoginProps, LoginState> = {
    test: '123'
  }

  state = {
    test: 111
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.test}
        </p>
      </div>
    );
  }
}

export default Login;
