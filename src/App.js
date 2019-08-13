import React, { Fragment } from 'react'
import logo from './images/logo.svg'
import hero from './images/hero-mobile.jpg'

function App() {
  return (
    <Fragment>
      <header className="header">
        <img src={logo} alt="logo" className="header_logo"/>
        <img src={hero} alt="woman" className="header_hero"/>
      </header>

      <main className="main">
        <h1 className="main_headline"><span className="main_headline-pop">We're</span> coming soon</h1>
        <p className="main_text">Hello fellow shoppers! We're currently building our new fashion store.
  Add your email below to stay up-to-date with announcements and our launch deals.</p>

        <form className="form">
          <label className="form_label">
            Email Address
            <input className="form_input" type="text" name="email" />
            <input className="form_submit" type="submit" value=">" />
          </label>
        </form>
      </main>
      
  
  
  <footer className="footer">
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
      Coded by <a href="#">AliLynne</a>.
    </p>
  </footer>
    </Fragment>
  );
}

export default App;
