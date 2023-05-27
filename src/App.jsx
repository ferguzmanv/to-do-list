
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

  const deleteTodo = (id) => {
   const newTodos = todos.filter((todo) => todo.id !== id);
   setTodos(newTodos);
 };

 const updateTodo = (id) => {
   const newTodos = todos.map((todo) => {
     if (todo.id === id) {
       todo.state = !todo.state;
     }
     return todo;
   });
   setTodos(newTodos);
 };

 const orderTodo = (arrayTodos) => {
   return arrayTodos.sort((a, b) => {
     if (a.priority === b.priority) return 0;
     if (a.priority) return -1;  
     if (!a.priority) return 1;
     
   });
 };
 
//  useEffect(() => {
//    setTodos(orderTodos(todos));
//    console.log("useEffect");
//  }, [todos]);


 
  return (

      < >
      <div className="container mb-2">
      <h1 className="my-5">To Do List</h1>
      <TodoForm addTodo ={addTodo} />
      <Todos 
         todos = {orderTodo(todos)}
         deleteTodo={deleteTodo}
         updateTodo ={updateTodo}
      />
    
      </div>
      </>

  );
};

export default App;
