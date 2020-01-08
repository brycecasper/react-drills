import React, {Component} from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    }
    this.listChange = this.listChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
}

  listChange(val){
    this.setState({input: val});
  }

  handleButton(){
    this.setState({
      list: [this.state.list, this.state.input],
      input: ''
    })
  }
  
  render(){
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    });
    return (
      <div className="App">
        <h1>To Do List</h1>
        <div>
          <input 
            onChange={e => this.listChange(e.target.value)}
            value={this.state.input}
            placeholder="Enter new task"
          />
          <button onClick={this.handleButton}>Add</button>
          {list}
        </div>
      </div>
    )
  }
}

export default App;
