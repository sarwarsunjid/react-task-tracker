//Create New Component
//import React from 'react'
import Header from './components/Header'
//import Task
import Tasks from './components/Tasks'
function App() {
  return (
    <div className="container">
      {/* <Header title="Programmer" />  */}
      {/* <Header title={1} /> */}
      <Header />
      <Tasks />
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }


export default App;
