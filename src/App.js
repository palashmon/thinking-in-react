import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/simple-sidebar.css';
import './App.css';
import Sidebar from './components/wrapper/Sidebar';
import PageContent from './components/wrapper/PageContent';

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <Sidebar />
        <PageContent />
      </div>
    );
  }
}

export default App;
