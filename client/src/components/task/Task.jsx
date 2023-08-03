import styled from "./style.module.css";
export const Task = (props) => {
    const { title = "", description = "" } = props;

    return (
        <>
            <div className={styled.container}>
                <div className={styled.cross}>
                    <span>X</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};
