import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../features/todo/todoSlice';


const Todo = ({id,title, description,handleDelete }) => {
  return(
    <div className='todo'>
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={()=>handleDelete(id)}>Delete</button>
  </div>
  )
}

const Home = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
    }

    dispatch(addTodo(data));

    // Reset the input fields
    setTitle('');
    setDescription('');
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({id}))
  }


  // Get the todos from the store using the useSelector hook
  const todosArray = useSelector((state) => state.todos.todos);

  return (
    <>
    <div style={{display:'block',position:'absolute',top:'30px',left:"20vw"}}>
    <form onSubmit={handleSubmit} style={{display:'block'}}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} style={{display:'block',width:"60vw"}}/>
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={handleDescriptionChange} style={{display:'block',width:"60vw"}} />
      </label> <br />
      <button type="submit" style={{display:'block'}}>Submit</button>
    </form>
    </div>

    <div style={{marginLeft:"40vw"}}>
      <h1>Todos</h1>
      {
        todosArray.map((todo) => (
          <Todo key={todo.id} title={todo.title} description={todo.description} id={todo.id} handleDelete={handleDelete} />
        ))
      }
    </div>
</>
  );
};

export default Home;
