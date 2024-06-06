import React from 'react'
import { Card, Typography,Checkbox,Chip } from "@material-tailwind/react";
import useTodosContext from '../hooks/use-todos-context';
const TABLE_HEAD = ["No.", "Task", "Completed", ""];
function TodoList() {
    const {todo} = useTodosContext()
  return (
        <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
                {TABLE_HEAD.map((head) => (
                <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    >
                    {head}
                    </Typography>
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {todo.map((item, index) => {
                const isLast = index === todo.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
    
                return (
                <tr key={item.id}>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {index+1}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        {item.task}
                    </Typography>
                    </td>
                    <td className={classes}>
                    <Checkbox color="teal" defaultChecked />
                    </td>
                    <td className={classes}>
                    <div className='flex gap-2 justify-center'> 
                        <Chip color="cyan" className='cursor-pointer' onClick={()=>console.log("edit",item.id)} value="Edit" /> 
                        <Chip color="pink" className='cursor-pointer' onClick={()=>console.log("delete",item.id)} value="Delete" /> 
                    </div>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </Card>
  )
}

export default TodoList