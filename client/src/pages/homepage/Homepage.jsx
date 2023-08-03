import { useEffect, useState } from "react";
import { TaskQueue } from "../../components/taskQueue/TaskQueue";
import styled from "./style.module.css";
import { DragDropContext } from "react-beautiful-dnd";
export const Homepage = () => {
    const [todos, setTodos] = useState([]);
    const [doings, setDoings] = useState([]);
    const [dones, setDones] = useState([]);
    useEffect(() => {
        setTodos([
            {
                title: "This is a task",
                description:
                    "dfd df dfd f d fd f fd fdf d ff df d fd fd d df df df df d df dffdfdf df d",
                createdAt: 23233,
            },
            {
                title: "This is a task",
                description:
                    "dfd df dfd f d fd f fd fdf d ff df d fd fd d df df df df d df dffdfdf df d",
                createdAt: 23233,
            },
        ]);
        setDoings([
            {
                title: "This is a task",
                description:
                    "dfd df dfd f d fd f fd fdf d ff df d fd fd d df df df df d df dffdfdf df d",
                createdAt: 23233,
            },
        ]);
        setDones([
            {
                title: "This is a task",
                description:
                    "dfd df dfd f d fd f fd fdf d ff df d fd fd d df df df df d df dffdfdf df d",
                createdAt: 23233,
            },
            {
                title: "This is a task",
                description:
                    "dfd df dfd f d fd f fd fdf d ff df d fd fd d df df df df d df dffdfdf df d",
                createdAt: 23233,
            },
            {
                title: "This is a task",
                description:
                    "dfd df dfd f d fd f fd fdf d ff df d fd fd d df df df df d df dffdfdf df d",
                createdAt: 23233,
            },
        ]);
    }, []);

    const dragEndHandler = (e) => {
        if (e.destination) {
            let { draggableId: draggable } = e;
            let { index: srcIndex } = e.source;
            let { index: destIndex, droppableId: droppable } = e.destination;
            draggable = draggable.split("_")[1].slice(0, -1);
            droppable = droppable.split("_")[1];

            // console.log({ srcIndex, destIndex, draggable, droppable });
            var dragItem = null;

            if (draggable === "todo") {
                dragItem = todos[srcIndex];
                setTodos((prev) => {
                    prev.splice(srcIndex, 1);
                    return prev;
                });
            } else if (draggable === "doing") {
                dragItem = doings[srcIndex];
                setDoings((prev) => {
                    prev.splice(srcIndex, 1);
                    return prev;
                });
            } else {
                dragItem = dones[srcIndex];
                setDones((prev) => {
                    prev.splice(srcIndex, 1);
                    return prev;
                });
            }

            if (droppable === "todo") {
                setTodos((prev) => {
                    prev.splice(destIndex, 0, dragItem);
                    return prev;
                });
            } else if (droppable === "doing") {
                setDoings((prev) => {
                    prev.splice(destIndex, 0, dragItem);
                    return prev;
                });
            } else {
                setDones((prev) => {
                    prev.splice(destIndex, 0, dragItem);
                    return prev;
                });
            }

            //api call
        }
    };

    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <div className={styled.container}>
                <TaskQueue name="todo" tasks={todos} remove={setTodos} />
                <TaskQueue name="doing" tasks={doings} remove={setDoings} />
                <TaskQueue name="done" tasks={dones} remove={setDones} />
            </div>
        </DragDropContext>
    );
};
