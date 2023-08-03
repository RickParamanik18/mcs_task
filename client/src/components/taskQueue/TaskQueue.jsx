import { Droppable } from "react-beautiful-dnd";
import { Task } from "../task/Task";
import styled from "./style.module.css";

export const TaskQueue = (props) => {
    const { name = "", tasks = [], index = null, updateTasks = null } = props;
    return (
        <>
            <Droppable droppableId={"droppable_" + name}>
                {(provided) => (
                    <div
                        className={styled.container}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <h2>{name.toUpperCase()}</h2>
                        {tasks.map((task, index) => (
                            <Task
                                title={task.title}
                                description={task.description}
                                key={index}
                                index={index}
                                type={name}
                                updateTasks={updateTasks}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </>
    );
};
