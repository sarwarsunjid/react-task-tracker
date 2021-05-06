// const tasks = [
//     {
//         id:1,
//         text: 'Doctors Appoinment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id:2,
//         text: 'Meeting at School',
//         day: 'Feb 5th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id:3,
//         text: 'Food Shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     },
// ]

//instead of above approach we will use state
//which will provide similar output

import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task,index) => (
            <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))}
        </>
    ) 
}

export default Tasks
