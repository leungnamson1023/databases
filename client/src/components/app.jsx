import React from 'react';
import Messages from './messages';
import InputForm from './inputForm';
import parse from '../parseAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: '',
    };
    this.setUsername = this.setUsername.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    // setInterval(this.getMessages.bind(this), 3000);
  }

  getMessages() {
    parse.getMessages((data) => {
      this.setState({
        messages: data,
      });
    });
  }

  setUsername(username) {
    this.setState({ username });
  }

  sendMessage(message) {
    const text = { message, username: this.state.username };
    parse.sendMessage(text, () => {
      this.getMessages();
    });
  }

  render() {
    return (
      <div className="app">
        { !this.state.username ?
          <InputForm
            onSubmit={this.setUsername}
            buttonLabel="Set Username"
            classNameLabel="username"
          />
          : `Welcome, ${this.state.username}!`
        }
        <InputForm
          onSubmit={this.sendMessage}
          buttonLabel="send"
          classNameLabel="message-input"
        />
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
