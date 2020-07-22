import React, { useState } from "react";

//Components
import TaskModal from "../../modal/TaskModal";

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
            <TaskModal isOpen={isOpen} closeModal={closeModal} />
        </>
    );
};

export default AddButton;