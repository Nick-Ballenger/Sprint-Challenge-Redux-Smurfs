import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getSmurfs, addSmurf } from '../actions/index'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
      <SmurfList smurfs={this.props.smurfs}/>
      <SmurfForm addSmurf={this.props.addSmurf}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf}
)(App);

