import React, {
  useState
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import ontheground from './gif/threwitontheground.gif'
import fluffy from './image/fluffy.png'
import netscape from './image/netscape.png'
import spacejam from './image/spacejam.png'
import './App.css';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const Portfolio = () => (
  <div>

<h1>Front End on the Ground</h1>
<h4>A gallery showcasing beautiful web design</h4>
<div className="videobanner">
  <img src={ontheground}/>
</div>

  <div className="galleryofbeauty">

    <a href="http://www.fluffy.com/fluffy/Fluffyhome.html" target="_blank"><img src={fluffy}/></a>
  <a href="http://home.mcom.com/home/welcome.html" target="_blank"><img src={netscape}/></a>
<a href="https://www.spacejam.com/archive/spacejam/movie/jam.htm" target="_blank"><img src={spacejam}/></a>

  </div>
</div>

)

const Contact = () => {

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textBody: ""
  })

  const handleUpdate = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    window.open('mailto:trash@heap.com?subject=email&body=body');

  }

  return (
    <div>
    <h1>Contact</h1>
    <form onSubmit={handleSubmit} action="mailto:trash@nobodycares.com" method="post">
    <input type="text" name="firstName" placeholder="First Name" onChange={handleUpdate}/>
    <input type="text" name="lastName" placeholder="Last Name" onChange={handleUpdate}/>
    <input type="text" name="email" placeholder="Email" onChange={handleUpdate}/>
    <textarea rows="4" name="textBody" placeholder="What do you want?" onChange={handleUpdate}/>

      <button>We Don't Care</button>

    </form>
    <a href="mailto:trash@nobodycares.com" subject={formState.email} body={formState.textBody} >Got To Hell</a>

  </div>)

}

const App = () => {
  return (
    <div>
      <Router>
      <nav>
        <Link to="/">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Route path="/" exact component={Portfolio} />
        <Route path="/contact" component={Contact} />
    </Router>
    </div>
  );
}

export default App;