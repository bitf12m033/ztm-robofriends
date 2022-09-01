import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import {robots} from './robots'


class App extends React.Component{

  constructor(){
    super();
     this.state = {
      robots:[],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>this.setState({robots:users})) 
  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
  }
  
  
  render() {
    const {robots , searchfield} = this.state;
    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if(!robots.length)
    {
      return <h1>Loading....</h1>
    }
    else{

      return (
  
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList  robots={filteredRobot} />
            </ErrorBoundary>
          </Scroll>
        </div>
      
      );
    }
  }
  
}

export default App;
