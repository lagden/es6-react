import 'fetch';
import React from 'react';
import ReactDom from 'react-dom';
import UserList from './user/list';

class App extends React.Component {
  render() {
    return (
      <div className="gs">
        <h1>Lista de Users</h1>
        <UserList />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
