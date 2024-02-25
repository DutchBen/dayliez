import React from "react";

import { ContentComponent } from "./ContentComponent";

export const Footer = () => {
    return (
        <ContentComponent>
            <hr className="mt-[100px]" />
            <div className="font-outfit pb-5 pt-5 mx-auto w-fit lg:m-0">
                © 2024 Dayliez. All rights reserved
            </div>
        </ContentComponent>
    );
};
