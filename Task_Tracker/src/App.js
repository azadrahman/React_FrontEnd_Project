import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from "./components/Tasks"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() =>{
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }    

    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // add task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'content-type' : 'application/json'},
      body: JSON.stringify(task)
    })
    const data = await res.json()

    setTasks([...tasks, data])

    //set a random id before json-server 
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = async (id) => {
    // console.log('Delete', id)
    await fetch(`http://localhost:5000/tasks/${id}`, 
      {
        method: 'DELETE'
      })
    setTasks( tasks.filter((task) => task.id !== id) )
  }

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'content-type' : 'application/json' },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }

  return (
    <Router>
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask( !showAddTask )} 
        showAdd={showAddTask} 
      />

      <Route path="/" exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask}/>}
      
          { tasks.length > 0 ?
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder} 
          /> 
            : 'No Task To Show'}

        </>
        )} 
      />

      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
