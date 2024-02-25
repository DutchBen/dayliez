import React from "react";

import { ContentComponent } from "./ContentComponent";

export const Footer = () => {
    return (
        <ContentComponent>
            <hr className="mt-[100px]" />
            <div className="font-outfit mb-5 mt-5">
                © 2024 Dayliez. All rights reserved
            </div>
        </ContentComponent>
    );
};
