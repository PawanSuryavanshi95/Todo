import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {

    constructor(props){
        super(props);
        this.state = {
            task:"",
        }
    }

    handleChange = (e) => {
        this.setState({
            task:e.target.value,
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.task!==""){
            this.props.addTask(this.state.task);
        }
        else{
            
        }
    }

    render(){
        return(
            <div className="d-flex">
                <textarea className="form-control mr-1" onChange={this.handleChange}/>
                <button className="btnAdd btn btn-primary" onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

const getDispatchFunctions = (dispatch) => {
    return {
        addTask: (task) => { dispatch({ type:"ADD_TASK", task:task}) },
    }
}

export default connect(null, getDispatchFunctions)(AddTodo);