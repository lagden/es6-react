'use strict';

import React from 'react';
import {userInfo} from '../tools/utility';

let el = React.createElement;

class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      open: false
    };
  }

  componentWillReceiveProps(props) {
    this.props = props || this.props;
    if (this.props.isOpen) {
      this.open(this.props);
    } else {
      this.close();
    }
  }

  open(props) {
    this.setState({
      open: props.isOpen,
      data: props.user
    });
  }

  close(event) {
    this.setState({
      open: false
    });
  }

  render() {
    let classes = ['modalLayout'];
    if (this.state.open) {
      classes.push('modalLayout--open');
    }
    let user = this.state.data;
    let img;
    let nome;
    if(user.hasOwnProperty('name')) {
      let {name, pic1x, pic2x} = userInfo(user);
      img = el('img', {
        className: 'modalLayout__figure',
        src: pic1x,
        srcSet: `${pic1x} 1x, ${pic2x} 2x`,
        alt: name
      });
      nome = name;
    }
    return (
      <div>
        <div>{this.props.children}</div>
        <div onClick={(event) => this.close(event)} className={classes.join(' ')}>
          {img}
          {nome}
        </div>
      </div>
    );
  }
}

UserModal.defaultProps = { isOpen: false, data: {} };

export default UserModal;
