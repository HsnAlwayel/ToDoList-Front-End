import React, { useState } from "react";

//Components
import MovieModal from "../../modal/MovieModal";

const AddButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button
                className="float-right"
                size="2em"
                onClick={() => setIsOpen(true)}
            />
            <MovieModal isOpen={isOpen} closeModal={closeModal} />
        </>
    );
};

export default AddButton;