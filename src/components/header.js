import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component{
  authButton(){
    const { authenticated } = this.props;
    const labelAction = authenticated ? 'out' : 'in';

    return (
      <button 
        onClick={() => this.props.authenticate(!authenticated)} 
        className="btn btn-info">
          Sign {labelAction}
      </button>
    )
  }

  render(){
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="btn btn-default" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-default" to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            { this.authButton() }
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return { 
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, actions)(Header);