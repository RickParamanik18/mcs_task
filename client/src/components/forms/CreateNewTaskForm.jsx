import { useState } from "react";
import styled from "./style.module.css";

export const CreateNewTaskForm = (props) => {
    const { setTodos, setVisibility } = props;
    const [formData, setFormData] = useState({});
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos((prev) => [...prev, { ...formData, status: 0 }]);
        e.target.reset();
        //api call
        setVisibility(false);
    };
    const changeHandler = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    className={styled.input}
                    type="text"
                    name="title"
                    placeholder="Enter Task Title"
                    required
                    onChange={changeHandler}
                />
                <input
                    className={styled.input}
                    type="text"
                    name="description"
                    placeholder="Enter Task Description"
                    required
                    onChange={changeHandler}
                />
                <button className={styled.button} type="submit">
                    Create
                </button>
            </form>
        </>
    );
};
