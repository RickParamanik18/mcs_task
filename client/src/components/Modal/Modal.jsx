import React, { useState } from "react";
import styled from "./style.module.css";

export const Modal = (props) => {
    const { title, children, visibility: vz = false } = props;
    const [visibility, setVisibility] = useState(vz);

    return (
        <>
            {visibility ? (
                <div className={styled.container}>
                    <div className={styled.modalBody}>
                        <div className={styled.header}>
                            <span className={styled.title}>{title}</span>
                            <span
                                className={styled.cross}
                                onClick={() => setVisibility(false)}
                            >
                                X
                            </span>
                        </div>
                        <hr />
                        {React.cloneElement(children, {
                            setVisibility: setVisibility,
                        })}
                    </div>
                </div>
            ) : null}
        </>
    );
};
