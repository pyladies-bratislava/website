import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components
import Home from './Home' // import page Home
import About from './About' // import page About
import MeetUps from './MeetUps' // import page MeetUps
import Events from './Events' // import page Events
import Contact from './Contact' // import page Contact
import { Page3 } from './pages' // import our pages
import Footer from './Footer' // import page Footer
import logo from './assets/pyladies-head.png'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About}/>
      <Route exact path='/MeetUps' component={MeetUps} />
      <Route exact path='/Events' component={Events} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/3' component={Page3} />
    </Switch>
  </main>
)

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {path: "/About", text: "About Us", isActive: false},
        {path: "/MeetUps", text: "MeetUps", isActive: false},
        {path: "/Events", text: "Events", isActive: false},
        {path: "/3", text: "Stories", isActive: false},
        {path: "/Contact", text: "Contact", isActive: false},
      ]
    }
  }

  handleClick(i) {
    const links = this.state.links.slice(); 
    for (const j in links) {
      links[j].isActive = i === j ;
    }
    this.setState({links: links});
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
          <Link className="navbar-brand" to="/">
            <img
            alt=""
            src={logo}
            width='30'
            height='30'
            className="d-inline-block align-top"
            />{' '}
            PyLadies Bratislava</Link>

          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-toggle"
          aria-controls="nav-content"
          aria-expanded="false"
          >
          <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar-toggle">  
          <ul className="navbar-nav mr-auto">
            {this.state.links.map((link, i) => 
              <NavLink 
                path={link.path} 
                text={link.text} 
                isActive={link.isActive}
                key={link.path} 
                onClick={() => this.handleClick(i)}
              /> 
              )}
          </ul>
          </div>  
        </nav>
      </div>
    );
  }
};

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App;

class NavLink extends Component {

  render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                  <Link 
                    className="nav-link" 
                    to={this.props.path}
                    onClick={() => this.props.onClick()}
                  >
              {this.props.text}</Link>
        </li>
      );
  }
};
