import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'; // import the react-router-dom components
import { Home, Page1, Page2, Page3 } from './pages' // import our pages
import logo from '../../frontend/src/assets/pyladies-head.png'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/1' component={Page1}/>
      <Route exact path='/2' component={Page2} />
      <Route exact path='/3' component={Page3} />
    </Switch>
  </main>
)

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {path: "/1", text: "Page 1", isActive: false},
        {path: "/2", text: "Page 2", isActive: false},
        {path: "/3", text: "Page 3", isActive: false},
      ]
    }
  }

  handleClick(i) {
    const links = this.state.links.slice(); 
    for (const j in links) {
      links[j].isActive = i == j ;
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
          <ul className="navbar-nav">
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
        </nav>
      </div>
    );
  }
};

const App = () => (
  <div>
    <Header />
    <Main />
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

