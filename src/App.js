import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Todo App</NavbarBrand>
        </Navbar>
      </header>
      <main>
        <AddTodo/>
        <Todos/>
      </main>
    </div>
  );
}

export default App;
