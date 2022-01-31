import { useState , useEffect } from 'react';
import './App.css';
import { supabaseClient } from './client';

function App() {

  // creating the user state
  const [ user , setUser ] = useState(null);

  // configuring useEffect
  useEffect(() => {

    // calling the authorizeUser function
    authorizeUser();

    // window event listener to recall the user after the OAuth redirect happens
    window.addEventListener('hashchange', function(){
      authorizeUser();
    });
  },[]);

  async function authorizeUser() {
    const user = supabaseClient.auth.user();
    setUser(user);
  }

  // function to sign in with github 
  async function signInWithGithub() {
    await supabaseClient.auth.signIn({
      provider: 'github',
    });
  }

  // function to sign out
  async function signout(){
    await supabaseClient.auth.signOut();
    setUser(null);
  }

  // if the user exists
  if(user){
    return (
      <div className="App">
        <div className="card">
              <p>Hey {user.email} </p>
              <button onClick={signout}>Sign Out</button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="App">
      <div className="card">
            <p>Hey new user , please sign in </p>
            <button onClick={signInWithGithub}>Sign In</button>
      </div>
    </div>
  )
}

export default App;
