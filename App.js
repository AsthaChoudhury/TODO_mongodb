import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo } from "./utils/HandleApi";
import axios from "axios";
import { updateToDo } from "./utils/HandleApi";


function App() {

  const [toDo,setTodo]= useState([])
  const [text,setText]=useState("")
  const [todoId, setTodoId] = useState("")
  const[isUpdating, setIsUpdating] = useState(false)
  useEffect(() => {
   axios.get('http://localhost:8000')
   .then((Response) => {
    setTodo(Response.data);
   })
   .catch((error) => {
    console.error('Error fetching the data: ',error);
   });
  },[])

  const updateMode= (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      <div className="conatiner">
        <h1>TODO</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add TODO" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <div className="add" 
          onClick={ 
            isUpdating? 
            () =>updateToDo(todoId, text, setTodo,setText,setIsUpdating) 
            : 
            () => addToDo(text,setText,setTodo)}>
            {isUpdating ? "Update" : "ADD"}</div>
          
        </div>
        <div className="list">
          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text} 
          updateMode={()=>
            updateMode(item._id, item.text)
          
          }
          
          deleteToDo= {() => deleteToDo(item._id,setTodo)}/>)}
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
