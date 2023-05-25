import React,{useState , useContext} from 'react'
import { DataContext } from './DataProvider'

export default function FormInput() {

  const [todos, setTodos] = useContext(DataContext);
  const [todoName , setTodName] = useState('');

  const addTodo = (e) =>{
    e.preventDefault();
    setTodos([...todos , {name:todoName , complete:false}])
    setTodName('');
  }
  
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type='text' name='todos' id='todos'
        required placeholder='Please Enter Data'
        value={todoName} onChange={(e) =>setTodName(e.target.value.toLocaleLowerCase())}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
