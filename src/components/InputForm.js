import React, { Component } from 'react';
import { submitIdea } from '../actions/index.js';

export default class InputForm extends Component {
  constructor(){
    super();
    this.state = {
      titleText: "",
      bodyText: ""
    };
  }

  setIdeaState(key, value) {
    this.setState({
      [key]: value
    });
  }

  render(){
    return (
      <div>
      <form>
      <input value={this.state.titleText} placeholder="title" onChange={ (e) => this.setIdeaState("titleText", e.target.value)}  /><br />
      <input value={this.state.bodyText} placeholder="body" onChange={ (e) => this.setIdeaState("bodyText", e.target.value )} />
      <button type="submit">Submit</button>
      </form>
      </div>
      )
    }
};
