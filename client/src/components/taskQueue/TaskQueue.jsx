import { Task } from "../task/Task";
import styled from "./style.module.css";
export const TaskQueue = (props) => {
    const { name = "", tasks = [] } = props;
    return (
        <>
            <div className={styled.container}>
                <h2>{name.toUpperCase()}</h2>
                {tasks.map((task,index) => (
                    <Task
                        title={task.title}
                        description={task.description}
                        createdAt={task.createdAt}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
};
