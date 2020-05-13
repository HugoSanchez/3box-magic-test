import React, {useEffect} from 'react';
import logo from './bradbvry1.png';
import agua from './agua.jpg';
import './App.css';
const Box = require('3box');

const { Magic } = require('magic-sdk');

const magic = new Magic('pk_test_B9FC8D928795EDED'); 

const App = () => {
    /** 

  const load = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    console.log(isLoggedIn)
    if (isLoggedIn) {
      let data = await magic.user.getMetadata()
      console.log(data)
    }
  }

  useEffect(
    // load(),
  [])
      */
  const handleLogin = async e => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
    console.log(email)
    if (email) {
      /* One-liner login 🤯 */
      console.time('h')
      await magic.auth.loginWithMagicLink({ email });
      const isLoggedIn = await magic.user.isLoggedIn();
      console.log(isLoggedIn)
      console.log('RPC', magic.rpcProvider)
      let data = await magic.user.getMetadata()

      const box = await Box.openBox(data.publicAddress, magic.rpcProvider); 
      console.log(box)
      let space = await box.openSpace('bradbvry--main')
      console.log(space)
      console.timeEnd('h')

      }
  };
  
  const imageURL = 'https://images.unsplash.com/photo-1486612139543-cd41cd7ef078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  // 'https://images.unsplash.com/photo-1494565108644-2af890493b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  // 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  // 'https://images.unsplash.com/photo-1484968309888-8d6b403bc1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  //'https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  //'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  //'https://images.unsplash.com/photo-1484968309888-8d6b403bc1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  return (
    <div className="App">
        <div className="SignIn">
        <img src={logo} id="Header-Image" alt=''/>

        <h1 className='title'>It's time to log you in</h1>
        <p className='text'>Enter your email here to either log in or sign up. The process might take a few seconds, so please be patient.</p>
        <form onSubmit={handleLogin}>
          <input className='input' type="email" name="email" required="required" placeholder="thomas.pynchon@email.com" />
          <br></br>
          <button  className="button" type="submit">
            <p className="buttonText">Log in / Sign up</p>
          </button>
        </form>

        </div>
    </div>
  );
}

export default App;
