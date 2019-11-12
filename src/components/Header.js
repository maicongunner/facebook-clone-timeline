import React, { Component } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import facebookLogo from '../assets/facebook_logo.png';

class Header extends Component {

  render() {
    return (
      <>
        <header>
          <img src={facebookLogo} alt=""/>
          <div>
            <span>Meu perfil</span>
            <MdAccountCircle color="#fff" size="25" />
          </div>
        </header>
      
      </>
    );
  }

}

export default Header;
