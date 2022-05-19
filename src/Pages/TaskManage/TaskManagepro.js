import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const TaskManagepro = ({ task, index, refetch }) => {
    const { Name, Description, _id } = task;
    const [complete, setComplete] = useState(false);

    const completeTask = (name) => {
        toast(`The task ${name} is completed`);
        setComplete(true);

    }

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure to delete?');

        if (confirmation) {
            fetch(`http://localhost:5000/task/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // console.log(data);
                        toast('Deleted successfully');
                        refetch();
                    }
                })
        }


    }

    return (
        <tr style={{ textDecoration: complete ? 'line-through' : '' }}>
            <td>{index + 1}</td>
            <td>{Name}</td>
            <td>{Description}</td>
            <td> {complete ? <Button disabled className='me-2' variant="dark">Completed</Button> : <Button onClick={() => completeTask(Name)} className='me-2' variant="dark">Complete</Button>} <Button variant="danger" onClick={() => handleDelete(_id)}>Delete</Button></td>
        </tr>
    );
};

export default TaskManagepro;