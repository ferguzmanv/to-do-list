import { useState } from "react";

const TodoForm = () => {

    const [todo, setTodo] = useState({

        todoNombre: "",
        todoDescription: "",
        todoEstado: "pendiente",

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo.title, todo.description, todo.state);
    };

    return (

        <div className="container mt-2">
        <form onSubmit = {handleSubmit} >
            <input 
                type="text"
                placeholder="Ingrese un TODO"
                className="form-control mb-2"
                name="todoNombre"
                value={todo.todoNombre}
                onChange={(e) => setTodo({...todo, todoNombre: e.target.value})}
             
         />
           
            <textarea
                 type="text"
                 className="form-control mb-2"
                 placeholder="ingrese TODO descripcion"
                 name="todoDescription"
                 value={todo.description}
                 onChange={(e) => setTodo({...todo, todoDescription: e.target.value})}
             
            />

            


            
            <select 
                className="form-select mb-2" 
                name="todoEstado"
                value={todo.todoEstado}
                onChange={(e) => setTodo({... todo, todoState :e.target.value})}
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