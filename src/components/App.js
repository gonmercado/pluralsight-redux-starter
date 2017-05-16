import React from 'react';
import Header from './common/Header';
import AppBody from './common/AppBody';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header/>
        <AppBody />
      </div>
    );
  }
}

export default App;
