import Swal from 'sweetalert2'
import { useState } from "react";

const TodoForm = () => {
     //objeto, se iniciatiza aca y se cativa con los "todos"
    const [todo, setTodo] = useState({

        title: "",
        description: "",
        state: "pendiente",
        priority: true,

    });

    const {title, description, state, priority} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() === ''|| description.trim() === ''){
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
                
              })

        }



        // console.log(todo.title, todo.description, todo.state);
        console.log(todo.title, todo.description, todo.state, todo.priority);
    };

    const handleChange = e => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        const {name,type,checked,value} = e.target
      
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,

        });

        // validar datos
        if (!title.trim()) return console.log("llena este campo")

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
                onChange={handleChange}
         />
           
            <textarea
                 type="text"
                 className="form-control mb-2"
                 placeholder="ingrese TODO descripcion"
                 name="description"
                 value={todo.description}
                 onChange={handleChange}
            />
            



            <div className="form-check mb-2">
            
            <input 
                type="checkbox"
                name="priority" 
                className="form-check-input " 
                id="inputCheck" 
                checked= {todo.priority}
                 onChange={(e)=> setTodo({...todo, priority:e.target.checked})}
            />

            <label 
                className="form-check-label" 
                htmlFor="inputCheck" >Dar prioridad</label>
            </div>
            



            <select 
                className="form-select mb-2" 
                name="state"
                value={todo.state}
                onChange={handleChange}
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