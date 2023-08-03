import styled from "./style.module.css";

export const Nav = (props) => {
    const addTask = () => {
        console.log('dfdf')
        props.setVisibility(true);
    };
    return (
        <>
            <div className={styled.container}>
                <div className={styled.logo}>MCS</div>
                <div className={styled.btn_container}>
                    <button className={styled.btn_Primary} onClick={addTask}>
                        Add Task
                    </button>
                    <button className={styled.btn_secondary}>Logout</button>
                </div>
            </div>
        </>
    );
};
