import { Draggable } from "react-beautiful-dnd";
import styled from "./style.module.css";
export const Task = (props) => {
    const { title = "", description = "", index = null, type = "" } = props;

    const remove = () => {
        props.remove((prev) => {
            prev.splice(index, 1);
            return prev;
        });
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
                        <span onClick={remove}>X</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            )}
        </Draggable>
    );
};
