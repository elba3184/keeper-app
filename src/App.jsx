import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Note />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
