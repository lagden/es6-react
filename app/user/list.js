'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import User from './user';
import UserModal from './modal';
import {getUserList, getUser} from '../services';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    getUserList(5).then((res) => {
      this.setState({
        users: res.results
      });
    });
  }

  addNewUser() {
    getUser(Math.random() * 10).then((res) => {
      let users = this.state.users;
      // users.unshift(res.results[0]);
      users.push(res.results[0]);
      this.setState({
        users: users,
        open: false,
        current: {}
      });
    });
  }

  removeUser(idx) {
    this.state.users.splice(idx, 1);
    this.setState({
      users: this.state.users,
      open: false,
      current: {}
    });
  }

  showUser(user) {
    this.setState({
      open: true,
      current: user
    });
  }

  render() {
    let users = this.state.users.map((data, idx) => {
      return (
        <User
          key={idx}
          data={data.user}
          onClickClose={() => this.removeUser(idx)}
          onClickDetalhe={() => this.showUser(data.user)}
        />
      );
    });
    return (
      <div>
        <button onClick={() => this.addNewUser()}>Add user</button>
        <div className="list">
          <UserModal isOpen={this.state.open} user={this.state.current}>
            <ReactCSSTransitionGroup
              transitionName="userlist"
              transitionAppear={true}
            >
              {users}
            </ReactCSSTransitionGroup>
          </UserModal>
        </div>
      </div>
    );
  }
}

export default UserList;
