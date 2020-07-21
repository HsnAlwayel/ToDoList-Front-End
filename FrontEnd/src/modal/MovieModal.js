import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import MovieStore from "../store/MovieStore";


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

const MovieModal = ({ isOpen, closeModal, oldMovie }) => {
    const [movie, setMovie] = useState(
        oldMovie ? oldMovie : {
            name: "",
            description: "",
            date: "",
        }
    )

    const handleChange = (event) => setMovie({ ...movie, [event.target.name]: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        MovieStore[oldMovie ? "updateMovie" : "createMovie"](movie);
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
                        <input type="text" name="name" className="form-control" onChange={handleChange} required value={movie.name} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange} required value={movie.description} />
                </div>
                <div class="form-group row">
                    <label >Date and time</label>
                    <div class="col-10">
                        <input type="datetime-local" className="form-control" onChange={handleChange} value={movie.date} />
                    </div>
                </div>

                <button
                    type="button"
                    class="btn btn-dark"

                >
                    add
        </button>
            </form>
        </Modal >
    )
};

export default MovieModal;