import { useState } from "react";
import styled from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user.service";
import Cookies from "js-cookie";

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const token = Cookies.get("userData");

    const submitHandler = (e) => {
        e.preventDefault();
        login(formData).then((data) => {
            console.log(data);
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
    ) : (
        navigate("/")
    );
};
