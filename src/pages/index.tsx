// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
    LayoutComponent,
    ContentComponent,
    CTAButton,
    Footer,
} from "../components";

// Step 2: Define your component
const IndexPage = () => {
    return (
        <LayoutComponent>
            <ContentComponent extraClass="bg-dayliezOrangeLinear">
                <div className="flex flex-col justify-start items-start p-7 lg:p-0 lg:items-none gap-[30px] lg:justify-between lg:flex-row w-full pt-[100px] lg:pt-[140px] pb-[100px] lg:pb-[100px] mx-auto font-outfit antialiased text-white">
                    <div className="lg:w-[420px] lg:m-0 flex flex-col pt-7 animate-slide-in-bottom">
                        <h1 className="text-[63px] leading-[63px] font-semibold tracking-tighter">
                            Streamline
                            <br />
                            Your&nbsp;Standups,
                            <br />
                            Help Your
                            <br />
                            Team Focus
                        </h1>
                        <div className="font-outfit text-[24px] font-normal break-words leading-9 mt-5 mb-5 antialiased">
                            Use Dayliez and get on the same page!
                        </div>
                        <CTAButton size="large" />
                    </div>
                    <div className="lg:w-[626px] lg:h-[469px] w-[300px] h-[235px]">
                        <StaticImage
                            src="../images/daily-scrum-collage.png"
                            alt="Improve your daily Scrum!"
                            className="lg:w-[626px] lg:h-[469px] w-[300px] h-[235px] rounded-xl z-0"
                        />
                    </div>
                </div>
            </ContentComponent>
            <ContentComponent>
                <div className="lg:grid lg:grid-cols-4 rounded-xl w-full mt-[100px] lg:w-[960px] bg-dayliezPurple p-[80px] mx-auto font-outfit antialiased text-white">
                    <div className="lg:col-span-3">
                        <h2 className="text-[48px] font-semibold">
                            Join our beta program now
                        </h2>
                        <div className="text-[24px]">
                            Take a step to get your agile right!
                        </div>
                    </div>
                    <div className="lg:col-span-1 place-self-center">
                        <CTAButton size="large" />
                    </div>
                </div>
            </ContentComponent>
            <Footer />
        </LayoutComponent>
    );
};

export const Head = () => <title>Dayliez: Scrum that works</title>;

export default IndexPage;
