import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Card, CardBody, CardTitle } from "reactstrap";
import { connect } from "react-redux";

class Todos extends Component {
  handleClick = (e, id) => {
    e.preventDefault();
    this.props.deleteTask(id);
  };

  render() {
    var key = 1;
    const todos = this.props.todos.map((todo) => {
      return (
        <Alert key={key++} color="secondary">
          {" "}
          {todo.task}{" "}
          <Button
            onClick={(e) => {
              this.handleClick(e, todo.id);
            }}
          >
            X
          </Button>
        </Alert>
      );
    });
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Todos</CardTitle>
            {todos}
          </CardBody>
        </Card>
      </div>
    );
  }

}

const getPropsFromState = (state) => {
  return {
    todos: state.todos,
  };
};

const getDispatchFunctions = (dispatch) => {
  return {
    deleteTask: (id) => {
      dispatch({ type: "DELETE_TASK", id: id });
    },
  };
};

export default connect(getPropsFromState, getDispatchFunctions)(Todos);
