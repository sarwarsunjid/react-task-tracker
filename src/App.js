//We moved it from Tasks.js Code
import {useState, useEffect} from 'react' 

//Create New Component
//import React from 'react'
import Header from './components/Header'

//import Task
import Tasks from './components/Tasks'

//Add Add Task
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  //moved from Task.js file for global state
  const [tasks,SetTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      SetTasks(tasksFromServer)
    }

    //fetchTasks()
    getTasks()
  }, [])


//fetch Task
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  //console.log(data)
  return data;
}

//fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  //console.log(data)
  return data;
}

//Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body:JSON.stringify(task),
  })

  const data  = await res.json()

  SetTasks([...tasks, data])
  // //console.log(task)
  // const id = Math.floor(Math.random() *
  // 1000) + 1

  // //console.log(id)
  // const newTask = { id, ...task }
  // SetTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method: 'DELETE',
  })

  //console.log('delete', id)
  SetTasks(tasks.filter((task) => task.id !==
  id))
}

//Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle,
  reminder: !taskToToggle.reminder }

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(updTask)
  })

   const data = await res.json()


  //console.log(id);
  //change reminder for particular state
  SetTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: 
    data.reminder } : task
    )
  )
}
 
  return (
    <div className="container">
      {/* <Header title="Programmer" />  */}
      {/* <Header title={1} /> */}
      <Header onAdd={() =>setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask} 
      />
      { showAddTask && <AddTask onAdd={ addTask } />}
      {tasks.length>0 ? (<Tasks tasks ={tasks} 
      onDelete= {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task Added'
      )}
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }


export default App;
