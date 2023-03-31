import React, { useState } from 'react';
import {TodoList} from './TodoList'


function App() {
  const [todos, setTodos] = useState(['TODO 1', 'TODO 2'])
  return (
    <>
      <TodoList todos={todos} />
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left</div>
    </>
    
    
  );
}

export default App;
