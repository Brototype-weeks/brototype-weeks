import { useState, useRef, useEffect } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { IoMdDoneAll } from "react-icons/io";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, setEditId] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addtodo = () => {
    // settodos([...todos, todo]);
    if(todo !== ''){
      settodos([...todos, {list: todo, id : Date.now(), status:false}]);
    settodo("");
    console.log(todos);
    }
    if (editId) {
      const editTodo = todos.find((todo)=>todo.id == editId)
      const updateTodo = todos.map((to)=>to.id == editTodo.id
      ? (to = {id : to.id, list : todo})
      : (to = {id : to.id, list : to.list}))
      settodos(updateTodo)
      setEditId(0);
      settodo('')
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const inputRef = useRef("null");



  const onDelete = (id) => {
   settodos(todos.filter((to) => to.id !== id))
  }

  const onComplete = (id) =>{

    let complete = todos.map((list)=>{
      if(list.id === id){
        return({...list, status : !list.status})
      }
      return list
    })
    settodos(complete)
  }

  const onEdit= (id) =>{
   const editTodo =  todos.find((to)=>to.id === id)
   console.log('edit : '+ editTodo.list );
   
   settodo(editTodo.list)
   setEditId(editTodo.id)
   console.log(editTodo);
   
  } 
  return (
    <>
      <div className="container">
        <h2>Todo App</h2>
        <form action="" onClick={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              ref={inputRef}
              value={todo}
              onChange={(e) => settodo(e.target.value)}
              placeholder="Enter your todo"
              className="form-control"
            />

            <button onClick={addtodo}>{editId ? 'EDIT' : ' ADD'}</button>
          </div>
        </form>
        <div className="list">
          <ul>
            {todos.map((to) => (
              <li className="list-items">
                <div className="list-item-list" id={to.status ? 'list-item' : ' '}>{to.list}</div>

                <span>
                  <IoMdDoneAll
                    className="list-item-icons"
                    id="complete"
                    title="Complete"
                    onClick={()=> onComplete(to.id)}
                  />
                  <TiEdit className="list-item-icons"
                   id="edit"
                   title="Edit" 
                   onClick={()=> onEdit(to.id)}
                   />
                  <MdDelete
                    className="list-item-icons"
                    id="delete"
                    title="Delete"
                    onClick={()=>onDelete(to.id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
