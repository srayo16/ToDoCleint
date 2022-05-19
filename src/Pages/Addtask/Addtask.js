import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinners from '../Spinner/Spinners';

const AddTask = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Spinners></Spinners>
    }
    const addedTask = event => {
        event.preventDefault();

        const Name = event.target.taskName.value;
        const Description = event.target.taskDes.value;
        const email = user.email;
        const tasksTotal = { Name, Description, email };

        const url = 'http://localhost:5000/task';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasksTotal)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success(`The task ${Name} as well`)
                    event.target.reset();
                }
            })
    }

    return (
        <div className='container text-center mt-3' style={{ height: '700px' }}>
            <h2 className='text-center text-danger mb-5'>Welcome to Add Task</h2>
            <form onSubmit={addedTask}>
                <input className='p-2 rounded border w-50' name='taskName' type="text" placeholder='Task Name' required /> <br />
                <textarea className='p-2 mt-3 rounded border w-50' name='taskDes' type="text" placeholder='Description' required /> <br />
                <input className='p-2 rounded border w-50' type="submit" value='Add Task' />
            </form>


        </div>
    );
};

export default AddTask;