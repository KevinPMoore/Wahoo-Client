import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch,
  Link 
} from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import './App.css';

export default function App() {

  const [ user, setUser ] = useState(null);

  return (
    <div className='App'>
      <Header hasUser={user}/>
      <Nav />
      <main>
        <Router>
          <Switch>
            <Route
              exact
              path={'/'}
              component={Home}
          />
          
          </Switch>
        </Router>
      </main>
    </div>
  );
};