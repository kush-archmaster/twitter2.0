import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*Side bar */}
      <Sidebar />

      {/*Feed */}
      <Feed />

      {/*Widgets- Whats happening? */}
      <Widgets />
    </div>
  );
}

export default App;
