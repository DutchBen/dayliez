import React from "react";
import { BaseComponent } from "./BaseComponent";

interface ContentComponentProps {
    children: React.ReactNode;
    backgroundColor?: string;
    extraClass?: string;
}

export const ContentComponent = ({
    children,
    backgroundColor = "bg-white",
    extraClass,
}: ContentComponentProps) => {
    return (
        <BaseComponent
            backgroundColor={backgroundColor}
            extraClass={extraClass}
        >
            <div className="max-w-[1076px] mx-auto w-auto">{children}</div>
        </BaseComponent>
    );
};
