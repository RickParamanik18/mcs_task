import { useState } from "react";
import styled from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        e.target.reset();
        //api call
    };
    const changeHandler = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <>
            <div className={styled.container}>
                <form onSubmit={submitHandler}>
                    <h2>Login</h2>
                    <input
                        className={styled.input}
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                        onChange={changeHandler}
                    />
                    <input
                        className={styled.input}
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        onChange={changeHandler}
                    />
                    <button className={styled.button} type="submit">
                        Login
                    </button>
                    <span>
                        Don't have an account <Link to="/signin">Signin</Link>
                    </span>
                </form>
            </div>
        </>
    );
};
