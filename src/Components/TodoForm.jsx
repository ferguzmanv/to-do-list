import { useState } from "react";

const TodoForm = () => {
     //objeto, se iniciatiza aca y se cativa con los "todos"
    const [todo, setTodo] = useState({

        title: "",
        description: "",
        state: "pendiente",
        priority: true,

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(todo.title, todo.description, todo.state);
        console.log(todo.title, todo.description, todo.state, todo.priority);
    };

    const handleChange = (e) => {

        

    };

    return (

        <div className="container mt-2">
        <form onSubmit = {handleSubmit} >
            <input 
                type="text"
                placeholder="Ingrese un TODO"
                className="form-control mb-2"
                name="title"
                value={todo.title}
                onChange={(e) => setTodo({...todo, title: e.target.value})}
         />
           
            <textarea
                 type="text"
                 className="form-control mb-2"
                 placeholder="ingrese TODO descripcion"
                 name="description"
                 value={todo.description}
                 onChange={(e) => setTodo({...todo, description: e.target.value})}
            />
            
            <div className="form-check mb-2">
            <input 
                type="checkbox"
                name="priority" 
                className="form-check-input " 
                id="inputCheck" 
                checked= {todo.priority}
                onChange={(e) => setTodo({... todo,  priority :e.target.checked})}
            />
          

            <label className="form-check-label" htmlFor="inputCheck" >Dar prioridad</label>
            </div>
            
            <select 
                className="form-select mb-2" 
                name="state"
                value={todo.state}
                onChange={(e) => setTodo({... todo, state :e.target.value})}
               >

                <option value="pendiente">pendiente</option>
                <option value="completado">completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                 Aceptar
                </button>
           </form> 
        </div>
    );
    };
  
  export default TodoForm;