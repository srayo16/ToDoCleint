import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Spinners from '../Spinner/Spinners';
import TaskManagepro from './TaskManagepro';
const TaskManage = () => {
    // const [tasks , setTasks] = useState([]);
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data: tasks, refetch } = useQuery('repoData', () =>
        fetch(`https://immense-lowlands-25738.herokuapp.com/task?email=${user.email}`).then(res =>
            res.json()
        )
    )
    if (isLoading || loading) {
        return <Spinners></Spinners>
    }
    return (
        <div className='container text-center' style={{ height: tasks.length > 10 ? 'auto' : '800px' }}>
            <h2 className='mt-3 mb-3 text-danger'>Total Tasks Table</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Complete/Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tasks.map((task, index) => <TaskManagepro key={task._id} refetch={refetch} index={index} task={task}></TaskManagepro>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default TaskManage;