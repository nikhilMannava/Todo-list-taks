import React ,{useState , useContext , } from 'react'
import { DataContext } from './DataProvider';

export default function Footer() {
  const [checkAll , setCheckAll] = useState(false);
  const [todos , setTodos] = useContext(DataContext);
  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo = () => {
    const newTodos = todos.filter(todo => {
      return todo.complete === false
    })
    setTodos(newTodos);
    setCheckAll(false);
  }
  return (
    <div> 
        <div className="row">
        <label>
          <input type="Checkbox" name="all" id="all" 
          onChange={handleCheckAll} checked={checkAll}/>
          All
        </label>
        <button id="delete" className='delete' onClick={deleteTodo}>Delete</button>
        </div>
        {todos.length === 0 ? <h3> No Data </h3> : '' }
  </div>
  )
}
