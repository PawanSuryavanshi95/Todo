import React from 'react';
import NavComponent from './component/NavComponent'
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent/>
      </header>
        {isAuthenticated?
          <main>
            <AddTodo/>
            <Todos/>
          </main> :
          <main>
            <h3>Please login to use this service</h3>
          </main>}
    </div>
  );
}

export default App;
