import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';

function App() {

  const [ user, setUser ] = useState(null);

  return (
    <div className="App">
      <Header hasUser={user}/>
      <main>
        <Switch>
          <Route
            exact
            path={'/'}
            component={Home}
        />
        
        </Switch>
      </main>
    </div>
  );
}

export default App;
