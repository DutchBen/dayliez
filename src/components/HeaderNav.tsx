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
                    <DayliezLogo className="h-[70px] w-[70px] pl-[20px]" />
                </Link>
                <div className="pt-[14px] pr-[20px]">
                    <Link
                        to="/pricing"
                        className="hover:text-dayliezOffWhite  font-outfit antialiased text-white mr-8"
                    >
                        Pricing
                    </Link>
                    <CTAButton size="small" />
                </div>
            </div>
        </BaseComponent>
    );
};
