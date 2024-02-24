import React from "react";
import { HeaderNav } from "./HeaderNav";

interface LayoutProps {
    children: React.ReactNode;
}

export const LayoutComponent = ({ children }: LayoutProps) => {
    return (
        <div className="w-screen">
            <HeaderNav />
            {children}
        </div>
    );
};
