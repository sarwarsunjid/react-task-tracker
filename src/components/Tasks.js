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
import {useState} from 'react' 

const Task = () => {
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
    return (
        <>
            {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Task
