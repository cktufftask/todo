import React, { Component } from 'react';
import './App.css';
import Note from './components/note/index.js';

const title = "Todo";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <Note/>
      </div>
    );
  }
}

export default App;
