import React, { Fragment } from 'react'
import logo from './images/logo.svg'
import hero from './images/hero-mobile.jpg'

function App() {
  return (
    <Fragment>
      <header>
        <img src={logo} alt="logo" />
        <img src={hero} alt="woman" />
      </header>

      <main>
        <h1><span>We're</span> coming soon</h1>
        <p>Hello fellow shoppers! We're currently building our new fashion store.
  Add your email below to stay up-to-date with announcements and our launch deals.</p>

        <form>
          <label>
            Email Address
            <input type="text" name="email" />
            <input type="submit" value=">" />
          </label>
        </form>
      </main>
      
  
  
  <footer>
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
      Coded by <a href="#">AliLynne</a>.
    </p>
  </footer>
    </Fragment>
  );
}

export default App;
