import { useState } from "react";
import Modal from "../component/Modal";
import Backdrop from "../component/Backdrop";

function Todo(props) {
    const [modalIsOpen, setmodalIsOpen] = useState(false);

    function deleteHandler() {
        setmodalIsOpen(true);
    }

    function closeModalHandler() {
        setmodalIsOpen(false);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.title}</h2>
                <div className="actions">
                    <button className="btn" onClick={deleteHandler}>
                        Delete
                    </button>
                </div>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}

export default Todo;
