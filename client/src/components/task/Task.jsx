import { Draggable } from "react-beautiful-dnd";
import styled from "./style.module.css";
import { useRef } from "react";
export const Task = (props) => {
    const { title = "", description = "", index = null, type = "" } = props;
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const remove = () => {
        props.updateTasks((prev) => {
            prev.splice(index, 1);
            return prev;
        });
    };
    const editTask = (field) => {
        const value =
            field === "title"
                ? titleRef.current && titleRef.current.innerText
                : descriptionRef.current && descriptionRef.current.innerText;
        props.updateTasks((prev) => {
            let task = prev.splice(index, 1);
            task = { ...task[0], [field]: value };
            console.log(task);
            prev.splice(index, 0, task);
            return prev;
        });
        //api call
    };

    return (
        <Draggable draggableId={"draggable_" + type + index} index={index}>
            {(provided) => (
                <div
                    className={styled.container}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className={styled.cross}>
                        <span onClick={remove} title="Remove">
                            X
                        </span>
                    </div>
                    <h3
                        contentEditable
                        suppressContentEditableWarning={true}
                        onBlur={() => editTask("title")}
                        ref={titleRef}
                        title="Click to edit title"
                    >
                        {title}
                    </h3>
                    <p
                        contentEditable
                        suppressContentEditableWarning={true}
                        onBlur={() => editTask("description")}
                        ref={descriptionRef}
                        title="Click to edit description"
                    >
                        {description}
                    </p>
                </div>
            )}
        </Draggable>
    );
};
