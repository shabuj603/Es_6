import React, { Component } from 'react';
import Counter from './counter';
import Navbar from '../navbar';
class Counters extends Component {
  state = { 
    counters:[
      {id:1, value:4},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
    ]
  } 

  handelIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log(this.state.counters[0]); 
    this.setState({counters}) ;     
  }
  handelDecrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    console.log(this.state.counters[0]); 
    this.setState({counters}) ;     
  }
  handelReset = () =>{
   const counters = this.state.counters.map(c =>{
      c.value =0;
      return c;
    });
    this.setState({counters});
  }
  handelDelete = counterId =>{
    const counters = this.state.counters.filter(c => c.id !== counterId) ;
    this.setState({counters}) ;    
  }
  render() { 
    return (
      <div>
        <Navbar  totalCounters={this.state.counters.filter(c=>c.value > 0).length}/>
         <button onClick={this.handelReset} className="btn btn-primary btn-sm m-2">Reset</button> 
        {this.state.counters.map(counter => 
        <Counter 
        key={counter.id} 
        onDelete={this.handelDelete}
        onIncrement={this.handelIncrement}
        onDecrement={this.handelDecrement}
        counter={counter}/>) }     
      </div>
    );
  }
}
 
export default Counters;