import React, { useState } from "react";
import styled from "./style.module.css";

export const Modal = (props) => {
    const { title, children, visibility, setVisibility } = props;
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
