import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import movieStore from "../store/MovieStore";


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

const MovieModal = ({ isOpen, closeModal }) => {
    const [movie, setMovie] = useState(
        {
            name: "",
            description: "",
            date: "",
        }
    )

    const handleChange = (event) => setMovie({ ...movie, [event.target.name]: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        movieStore.createMovie(movie);
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
                <div className="form-group row">
                    <label for="example-date-input" className="col-2 col-form-label">Date</label>
                    <div class="col-10">
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

export default MovieModal;