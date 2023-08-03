import { useState } from "react";
import styled from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/user.service";
import Cookies from "js-cookie";

export const Signin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const token = Cookies.get("userData");

    const submitHandler = (e) => {
        e.preventDefault();
        signin(formData).then((data) => {
            if (data) {
                if (data.status == "200") {
                    navigate("/");
                }
            }
        });
        e.target.reset();
    };
    const changeHandler = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return !token ? (
        <div className={styled.container}>
            <form onSubmit={submitHandler}>
                <h2>Signin</h2>
                <input
                    className={styled.input}
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    required
                    onChange={changeHandler}
                />
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
                    Signin
                </button>
                <span>
                    Already have an account <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    ) : (
        navigate("/")
    );
};
