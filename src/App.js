//import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

function App() {
    /*class CityForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', cities:[{"city":"Provo"},{"city":"Lindon"}]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        alert('A name was changed: ' + event.target.value);
        this.setState({value: event.target.value});
      }
      
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value);
        var url = "https://csonline.byu.edu/city?q=" + this.state.value;
        console.log("URL " + url);
        fetch(url)
              .then((data) => {
                return (data.json());
              })
              .then((citylist) => {
                console.log("CityList");
                console.log(citylist);
                this.setState({cities:citylist})
                console.log(this.state.cities);
        });
      }
        
      render() {
        
        const listItems = this.state.cities.map((cityname) => 
            <li key={cityname.city}>{cityname.city}</li>
        );
        
        return (
            <div>
            <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            <ul>{listItems}</ul>
            </div>
        )
      }
    }
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<CityForm />);
  */
   class Todo extends React.Component {
      constructor(props) {
        super(props);
         this.state = {
            formtask: '', 
            tasks:[{"task":"Wash Clothes","completed":false},{"task":"Sweep Floor","completed":true}]
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
      }
    
      handleChange(event) {
        this.setState({formtask: event.target.value});
      }
    
      handleSubmit(event) {
        //alert('A task was submitted: ' + this.state.formtask);
        this.setState({tasks:[...this.state.tasks, 
            {"task":this.state.formtask,"completed":false}]
            
        });
        this.setState({formtask:""});
        event.preventDefault();
      }
      
      handleToggle(event, index) { //passed the event and the index of the list item being crossed off
        event.preventDefault();
        const element = event.target;
        var target = this.state.tasks[index];
        if (target.completed) {
            target.completed = false;
        }
        else {
            target.completed = true;
        }
        console.log(this.state.tasks);
        element.classList.toggle("strike");
      }
      
      handleFilter() {
        //event.preventDefault();
        let filtered = this.state.tasks.filter(task =>{
            return !task.completed;
        });
        this.setState({tasks:filtered});
      }
    
      render() {
        const listItems = this.state.tasks.map((thistask, index) => 
          <li className={thistask.completed ? "strike" : "todo"} 
            onClick={event => this.handleToggle(event, index)}
            key={thistask.task}>{thistask.task}</li>
        );
        return (
            <div>
              <h1> To Do List </h1>
              <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
                <label>
                  Task:
                  <input type="text" value={this.state.formtask} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
              <ul>{listItems}</ul>
              <button onClick={this.handleFilter}>Clear Completed</button>
            </div>
        );
      }
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Todo />);
}

export default App;