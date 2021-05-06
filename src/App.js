//We moved it from Tasks.js Code
import {useState} from 'react' 

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

//Add Task
const addTask = (task) => {
  //console.log(task)
  const id = Math.floor(Math.random() *
  1000) + 1

  //console.log(id)
  const newTask = { id, ...task }
  SetTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  //console.log('delete', id)
  SetTasks(tasks.filter((task) => task.id !==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  //console.log(id);
  //change reminder for particular state
  SetTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: 
    !task.reminder } : task
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
