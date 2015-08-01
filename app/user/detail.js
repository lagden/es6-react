'use strict';

import React from 'react';
import {getUserList} from './services';
import {ucFirst} from './tools/utility';

class User extends React.Component {
  render() {
    let name = this.props.data.user.name.first.ucFirst();
    return (
      <div>
        <h3>{ name }</h3>
        <p>{ this.props.data.user.email }</p>
      </div>
    );
  }
}

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    getUser(10).then((res) => {
      this.setState({
        users: res.results
      });
    });
  }

  render() {
    let users = this.state.users.map((user, idx) => {
      return <li key={ idx }><User data={user} /></li>;
    });
    return <ul>{ users }</ul>;
  }
}

export default UserList;