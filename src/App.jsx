import { useEffect } from 'react'
import './App.css'
import useTodosContext from './hooks/use-todos-context'
import TodoList from './components/TodoList'
import { Button } from '@material-tailwind/react'

function App() {
  const {fetchTodo,onCreate} = useTodosContext()
  useEffect(()=>{
    fetchTodo()
  },[])

  return (
    <>
        <div className='flex flex-col w-full h-[100vh] max-w-screen-md mx-auto justify-center items-center'>
          <div className='w-full  justify-between flex p-4'>
            <h1>Todo App</h1>
            <Button size='sm' color="blue" onChange={onCreate}>Add Task</Button>
          </div>
          <div className='w-full'>
            <TodoList/>
          </div>
        </div>
    </>
  )
}

export default App
