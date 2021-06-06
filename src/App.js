import React, { Component } from 'react'
import { CardList } from './components/card-list/Card_List.component'
import { SearchBox } from './components/search-box/SearchBox.component'
import './App.css';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
      searchfield: ''
    };
  }

  handleChange = e =>{
    this.setState({ searchfield: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchfield } = this.state
    const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"search"}
          handleChange={this.handleChange}>
        </SearchBox>
        <CardList monsters={filteredmonsters} >
        </CardList>
      </div>
    );
  }
}

