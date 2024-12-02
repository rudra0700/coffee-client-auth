import React, { useState } from 'react';

const ToDo = () => {

    const [tasks, setTask] = useState([]);
    console.log(tasks);

    const addTask = () => {
        
    }
    return (
        <div className='p-5 max-w-[400px] border-2 border-white mx-auto'>
            <input type="text" name="" id="" placeholder='Enter a task' className='w-[70%] mr-3 p-3' onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask} className='border border-white p-2'>Add Task</button>
        </div>
    );
};

export default ToDo;
