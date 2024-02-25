import React from "react";
import { Link } from "gatsby";

interface CTAButtonProps {
    size: "small" | "large";
    text?: string;
}

export const CTAButton = ({ size = "large", text }: CTAButtonProps) => {
    const getSizedProps = () => {
        return size === "small"
            ? "leading-5 w-[118px] h-[42px] text-base"
            : "leading-7 w-[142px] h-[50px] text-lg";
    };

    return (
        <Link to="/join-beta-form">
            <button
                className={`bg-black hover:text-dayliezOffWhite font-outfit rounded-xl antialiased text-white font-semibold ${getSizedProps()}`}
            >
                {text || "Get started"}
            </button>
        </Link>
    );
};
