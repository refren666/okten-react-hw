import { useEffect, useState } from "react"

import { jsonPlaceholderService } from '../../services/jsonPlaceholder.service';

export const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    jsonPlaceholderService.getAllTodos().then(res => setTodos(res));
  }, [])

  return (
    <div>
      <h2>TODOS: </h2>
      {todos?.map(todo => (
        <div key={todo.id} className='flex gap-x-3'>
          <h3>#{todo.id} {todo.title}</h3>
          <input type="checkbox" checked={todo.completed} readOnly />
        </div>
      ))}
    </div>
  )
}
