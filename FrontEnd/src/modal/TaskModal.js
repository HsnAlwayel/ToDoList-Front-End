import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import taskStore from "../store/TaskStore";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TaskModal = ({ isOpen, closeModal }) => {
    const [task, setTask] = useState(
        {
            name: "",
            description: "",
            date: "",
        }
    )

    const handleChange = (event) => setTask({ ...task, [event.target.name]: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        taskStore.createTask(task);
        closeModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3>New ToDo</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-6">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} required value={task.name} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange} required value={task.description} />
                </div>
                <div className="form-group row">
                    <label for="example-date-input" className="col-2 col-form-label">Date</label>
                    <div className="col-10">
                        <input className="form-control" name="date" type="date" onChange={handleChange} />
                    </div>
                </div>
                <button>
                    add
                </button>
            </form>
        </Modal >
    )
};

export default TaskModal;