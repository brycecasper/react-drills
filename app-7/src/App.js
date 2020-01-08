import React, {Component} from 'react';
import './App.css';
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
    }
    this.handleButton = this.handleButton.bind(this);
}

  handleButton(task){
    this.setState({list: [this.state.list, task]})
  }
  
  render(){
    return (
      <div className="App">
        <h1>To Do List</h1>
        <NewTask add={this.handleButton}/>
        <List tasks={this.state.list}/>
      </div>
    )
  }
}

export default App;

