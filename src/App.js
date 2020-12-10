import React, {useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import { 
  onClickAnalyticsEvent,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from './firebaseInit';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=> {
    onAuthStateChanged();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="email" onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={() => {
            onClickAnalyticsEvent('signIn button');
            signInWithEmailAndPassword(email, password);
        }}>
          Sign In
        </button>
      </header>
      <button onClick={() => {
        onClickAnalyticsEvent('sign out button');
        signOut();
      }}>
        Sign out
        </button>
    </div>
  );
}

export default App;
