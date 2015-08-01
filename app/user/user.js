'use strict';

import React from 'react';
import {userInfo} from '../tools/utility';

let el = React.createElement;

function buttonEl(...args) {
  return el('button', {
    className: args[0],
    onClick: args[1]
  }, args[2]);
}

class User extends React.Component {
  handleBtn(event, data) {
    event.preventDefault();
    switch(data) {
      case 'detalhe':
        this.props.onClickDetalhe();
        break;
      case 'remove':
        this.props.onClickClose();
        break;
    }
  }

  render() {
    let user = this.props.data;
    let {name, pic1x, pic2x} = userInfo(user);
    let img = el('img', {
      className: 'media__figure list-box__figure',
      src: pic1x,
      srcSet: `${pic1x} 1x, ${pic2x} 2x`,
      alt: name
    });
    let btDetalhe = buttonEl('detalhe', (e) => this.handleBtn(e, 'detalhe'), 'Detalhes');
    let btRemove = buttonEl('remove', (e) => this.handleBtn(e, 'remove'), '✖');
    return (
      <section className="list-box">
        <div className="media lista-box__content">
          {img}
          <div className="media__body">
            <h3>{name}</h3>
            {btDetalhe}
            {btRemove}
          </div>
        </div>
      </section>
    );
  }
}

export default User;
