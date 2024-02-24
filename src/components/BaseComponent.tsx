import React from "react";

interface BaseComponentProps {
    children: React.ReactNode;
    backgroundColor?: string;
    extraClass?: string;
}

export const BaseComponent = ({
    children,
    extraClass,
    backgroundColor = "bg-white",
}: BaseComponentProps) => {
    return (
        <div className={`${backgroundColor} w-screen ${extraClass}`}>
            <div className="max-w-[1496px] mx-auto">{children}</div>
        </div>
    );
};
