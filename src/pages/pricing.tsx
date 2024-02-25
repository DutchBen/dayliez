// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
    LayoutComponent,
    ContentComponent,
    CTAButton,
    Footer,
    JoinBeta,
} from "../components";

// Step 2: Define your component
const IndexPage = () => {
    return (
        <LayoutComponent>
            <ContentComponent>
                <div className="flex flex-col items-center p-7 lg:pt-10 mx-auto font-outfit antialiased text-black">
                    <h1 className="text-[63px] leading-[63px] font-semibold tracking-tighter">
                        Use Dayliez now for free!
                    </h1>
                    <h2 className="text-[26px] leading-[36px]  text-gray-500 w-[635px] p-5">
                        Dayliez is a new agile/scrum tool that will help you and
                        your team. Our tool is ready to use but still in beta
                        mode.
                    </h2>
                    <h2 className="text-[26px] leading-[36px]  text-gray-500 w-[635px] p-5">
                        So take this opportunity to join now! It's free and you
                        will become one of the first beta testers and discuss
                        and propose the features you would really like to see.
                    </h2>
                    <CTAButton size="large" text="Join beta now!" />
                </div>
            </ContentComponent>
            <JoinBeta />
            <Footer />
        </LayoutComponent>
    );
};

export const Head = () => <title>Dayliez: Scrum that works</title>;

export default IndexPage;
