import { createContext,useState } from "react";
import axios from 'axios';

const TodosContext = createContext();
function Provider({ children }) {
    const [todo, setTodo] = useState([])
    const fetchTodo = async ()=>{   
        try{
        const response = await axios.get("http://localhost:3002/todos");
        setTodo(response.data)
        }
        catch(err){
        console.log("fetch data got erorr :",err);
        }
    }
    const onCreate= async (task)=>{
        const newTask = {
        id:todo.length.toString(),
        task,
        isDone:false
        }
        await axios.post("http://localhost:3002/todos",newTask)
        setTodo([...todo,newTask])
    }


    const handleOncheck= async (id)=>{
        const newArr = [...todo]
        const find = todo.filter(n=>n.id==id)
        find[0].isDone = !find[0].isDone
        const newTask = {
        ...find[0],
        isDone:find[0].isDone
        }
        
        await axios.put(`http://localhost:3002/todos/${id}`,newTask)
        setTodo(newArr)
    }

    const handleOnUpdate =async (id,updateTask)=>{
        const newArr = [...todo]
        const find = newArr.filter(n=>n.id==id)
        find[0].task = updateTask
        const newTask = {
        ...find[0],
        task:updateTask
        }
        
        await axios.put(`http://localhost:3002/todos/${id}`,newTask)
        setTodo(newArr)
    }
    const handleOnDelete = async (id)=>{
        await axios.delete(`http://localhost:3002/todos/${id}`)
        const filter = todo.filter(n=>n.id!=id)
        setTodo(filter)


    }
    const valueToShare = {
        todo,
        handleOnDelete,
        handleOnUpdate,
        onCreate,
        handleOncheck,
        fetchTodo
    }
    return (
    <TodosContext.Provider value={valueToShare}>
        {children}
    </TodosContext.Provider>
    )
}
export {Provider}
export default TodosContext;