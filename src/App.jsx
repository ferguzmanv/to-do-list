
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

//array de objetos
const initialStateTodos = [

      {
         id: 1,
         title : 'todo 01',
         description: 'descripcion 01',
         state: true,
         priority: true,
      },
      {
         id: 2,
         title : 'todo 02',
         description: 'descripcion 02',
         state: false,
         priority: false,
      },
      {
         id: 3,
         title : 'todo 03',
         description: 'descripcion 03',
         state: false,
         priority: true,
      },

];

const App = () =>{

  const [todos, setTodos] = useState(initialStateTodos);
  
  const addTodo = (todo) => {
      setTodos([...todos, todo])

  };
  return (

      < >
      <div className="container mb-2">
      <h1 className="my-5">To Do List</h1>
      <TodoForm addTodo ={addTodo} />
      <Todos todos = {todos} />
    
      </div>
      </>

  );
};

export default App;
