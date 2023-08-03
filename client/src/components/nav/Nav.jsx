import { logout } from "../../services/user.service";
import styled from "./style.module.css";
import Cookies from "js-cookie";

export const Nav = (props) => {
    const addTask = () => {
        console.log("dfdf");
        props.setVisibility(true);
    };
    const logoutHandler = () => {
        const token = Cookies.get("userData");

        logout(token).then((data) => {
            if (data) {
                if (data.status == "200") {
                    navigate("/");
                }
            }
        });
    };
    return (
        <>
            <div className={styled.container}>
                <div className={styled.logo}>MCS</div>
                <div className={styled.btn_container}>
                    <button className={styled.btn_Primary} onClick={addTask}>
                        Add Task
                    </button>
                    <button
                        className={styled.btn_secondary}
                        onClick={logoutHandler}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};
