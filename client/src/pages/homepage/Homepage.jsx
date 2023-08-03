import { useEffect, useState } from "react";
import { TaskQueue } from "../../components/taskQueue/TaskQueue";
import styled from "./style.module.css";
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
    console.log(todos);
    return (
        <>
            <div className={styled.container}>
                <TaskQueue name="Todo" tasks={todos} />
                <TaskQueue name="Doing" tasks={doings} />
                <TaskQueue name="Done" tasks={dones} />
            </div>
        </>
    );
};
