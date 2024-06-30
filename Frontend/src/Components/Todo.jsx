import React, { useState,useEffect } from 'react';
import './todo.css';
import axios from "axios";

 
const Todo = () => {

  // state for getting input from user
  const[task,setTask]=useState({task:""});

  // state for changing the edit to save
  const [editableId, setEditableId] = useState(null); 

  // state for getting edited input from user
  const [editedTask, setEditedTask] = useState(""); 
 

 // Fetching the task that has been posted to db using get method 
  useEffect(() => { getdata();},[]);
  
  let token = localStorage.getItem('token')
  console.log(token)
  const getdata=()=>{ axios.get("http://localhost:4000/task-get",{headers:{"Authorization" : `Bearer ${token}`}})
                           .then((res) => {setTask(res.data.data);})
                           .catch((error) => {console.log(error)})
          }
  

  // posting the input task to db using post method
  const onAdd = (e) => 
  {
    e.preventDefault();
    axios.post("http://localhost:4000/task-post",task,{headers: {'Authorization': `Bearer ${token}`,}})
         .then((res) => {console.log(res.data);setTask({task:""});getdata();})
         .catch((error) => {console.log(error)})
  };
 
   // function for changing the states b/w edit & save
  const toggleEditable = (id) => 
  { 
    const rowData = task.find((data) => data._id === id); 
    if (rowData) { setEditableId(id); setEditedTask(rowData.task);}
    else { setEditableId(null); setEditedTask(" "); }; 
   }

  // function for posting the updated task
  const saveEditedTask = (id) => 
  { 
    const editedData = {task: editedTask}; 
    // Updating edited data to the database through updateById API 
    axios.post('http://localhost:4000/task-update/' + id, editedData,{headers: {'Authorization': `Bearer ${token}`,}}) 
        .then(result => { console.log(result); setEditableId(null); getdata();  }) 
        .catch(err => console.log(err)); 
   } 


   // Delete task from database 
  const deleteTask = (id) => 
  { 
    axios.delete('http://localhost:4000/task-delete/' + id,{headers: {'Authorization': `Bearer ${token}`,}}) 
         .then(result => {console.log(result); getdata();}) 
         .catch(err => console.log(err)) 
  } 

          
  return (<>

    <div className='containertodo'>
    <div className='topic'><span className='topictext'>My Todo's</span></div>
      <div className='containermain'>
      
      <div className='todoinput'>
       <div><input className='inputtask' placeholder='Enter your task here....' onChange={(e) => setTask({task:e.target.value})} id="task" name="task" value={task.task}/></div>
       <div><button className='inputbutton'  onClick={onAdd} >ADD</button></div>
       </div>

      <div className='tablecontainer'>

        <table className='tasktable'>
        {Array.isArray(task) ? (
         <tbody>
          {task.map((user,i) => {
            return(
              <tr key={user._id} className='tablerow'>

                <td>{i+1}.</td>
                
                <td className='col1'> 
                {editableId === user._id ? 
                ( <input type="text" className='edittask' value={editedTask}  onChange={(e) => setEditedTask(e.target.value)}/>) : ( user.task )} 
                </td> 
                
                <td>
                {editableId === user._id ? 
                ( <button className="btn btn-save btn-lg btn3d" onClick={() => saveEditedTask(user._id)}> <span class="glyphicon glyphicon-ok" >Save</span></button> ) 
                : 
                ( <button className="btn btn-update btn-lg btn3d" onClick={() => toggleEditable(user._id)}><span class="glyphicon glyphicon-ok" >Edit </span></button> )} 
                </td> 

                <td><button type="button" className="btn btn-Remove btn-lg btn3d" onClick={() => deleteTask(user._id)}>
                <span className="glyphicon glyphicon-ok"> Remove</span></button></td>
             </tr>
             )})}
         </tbody>):( <tbody> <tr> <td colSpan="4">Loading Todo's...</td> </tr></tbody> )}
        </table> 
      </div>
      </div>
       </div>
    </> )  
}
export default Todo;

