import React, { Component } from 'react';
import './App.css';
const list=[{
  title:'React',
  url:'',
  author:'qiuyuan',
  num_comments:3,
  points:4,
  objectID:0,
},{
  title:'Redux',
  url:"",
  num_comments:2,
  points:5,
  objectID:1,
},];
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:list,
    };
    this.onDismiss=this.onDismiss.bind(this);
  }
  onDismiss(id){
    const updateList=this.state.list.filter(function isNotId(item){return item.objectID !==id});
    this.setState({list:updateList});
  }
  render() {
    const helloWorld="Welcome to the Road to learn React";
    const name={
      firtName:"qiu",
      lastName:"yuan",
    }
    return (
      <div className="App">
        {this.state.list.map(item=>{
          return <div key={item.objectID}>
              <span><a href={item.url}></a></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button onClick={()=>{this.onDismiss(item.objectID)}} type="button">Dismiss</button>
              </span>
          </div>;
        })}
      </div>
    );
  }
}
export default App;
