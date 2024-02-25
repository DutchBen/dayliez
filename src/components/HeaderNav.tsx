import React from "react";
import { Link } from "gatsby";

import { BaseComponent } from "./BaseComponent";
import { CTAButton } from "./CTAButton";
import DayliezLogo from "./../assets/dayliez.svg";

export const HeaderNav = () => {
    return (
        <BaseComponent
            backgroundColor="bg-dayliezOrange"
            extraClass="sticky top-0 z-10"
        >
            <div className="h-[70px] flex justify-between">
                <Link to="/" className="[&.active]:font-bold">
                    <DayliezLogo className="h-[70px] w-[70px] ml-[20px]" />
                </Link>
                <div className="pt-[14px] pr-[20px]">
                    <Link
                        to="/pricing"
                        className="hover:text-dayliezOffWhite font-size-[17px] font-medium font-outfit antialiased text-white mr-[30px]"
                    >
                        Pricing
                    </Link>
                    <CTAButton size="small" />
                </div>
            </div>
        </BaseComponent>
    );
};
