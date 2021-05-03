//We moved it from Tasks.js Code
import {useState} from 'react' 
//Create New Component
//import React from 'react'
import Header from './components/Header'
//import Task
import Tasks from './components/Tasks'
function App() {
  //moved from Task.js file for global state
  const [tasks,SetTasks] = useState([
    {
      id:1,
      text: 'Doctors Appoinment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id:2,
      text: 'Meeting at School',
      day: 'Feb 5th at 1:30pm',
      reminder: true,
    },
    {
      id:3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
])

//Delete Task
const deleteTask = (id) => {
  //console.log('delete', id)
  SetTasks(tasks.filter((task) => task.id !==id))
}
 
  return (
    <div className="container">
      {/* <Header title="Programmer" />  */}
      {/* <Header title={1} /> */}
      <Header />
      {tasks.length>0 ?<Tasks tasks ={tasks} 
      onDelete= {deleteTask} />: 'No Task Added'}
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }


export default App;
