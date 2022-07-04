import React, { Component } from 'react';
class Counter extends Component {

  render() { 
    return (
      
      <React.Fragment>
       
        <span className={this.getBadgeClasses()}>{this.forMetCount()}</span>   
        <button
         onClick={() => this.props.onIncrement(this.props.counter
          )}
         className='btn btn-secondary btn-sm'>+</button>
        <button
         onClick={() => this.props.onDecrement(this.props.counter
          )}
         className='btn btn-secondary btn-sm' disabled={this.props.counter.value == 0 ? "disabled" : ""}>-</button>
        <button
         onClick={() => this.props.onDelete(this.props.counter.id)} 
         className="btn btn-danger md-2 sm">Delete</button>
      </React.Fragment>
    );
  }
  getBadgeClasses (){
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;

  }
  forMetCount(){
    const {value: count} = this.props.counter;
    return count === 0 ? 'zero' : count;
  }
}
 
export default Counter;