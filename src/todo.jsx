import React, { useState } from "react";


function To_do(){

    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 
    const [editText, setEditText] = useState(""); 

    function addTask (){
        const newTask = document.getElementById("inputTask").value
        setTasks(prevTasks => [...prevTasks, newTask]);
        document.getElementById("inputTask").value = "";
    }

    function deleteTask (index){
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))
    }

    function editTask(index) {
        setEditIndex(index); 
        setEditText(tasks[index]);
    }

    function saveTask(index) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = editText;
            return updatedTasks;
        });
        setEditIndex(null); 
        setEditText(""); 
    }

    return(
        <div className="container">
            <h1>To Do List App</h1>
            <div>
                <input placeholder="Enter Daily Task" type="text" id="inputTask" className="input-task"/>
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {editIndex === index ? (
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className="edit-input"/>
                        ) : (
                            <span>{task}</span>
                        )}
                        <div>
                            {editIndex === index ? (
                                <button onClick={() => saveTask(index)} className="save-button">Save</button>
                            ) : (
                                <button onClick={() => editTask(index)} className="edit-button">Edit</button>
                            )}
                            <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default To_do;
