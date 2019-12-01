import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    );
  }
}

export default Footer;
