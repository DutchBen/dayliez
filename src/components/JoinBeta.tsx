import React from "react";
import { ContentComponent } from "./ContentComponent";
import { CTAButton } from "./CTAButton";

export const JoinBeta = () => {
    return (
        <ContentComponent>
            <div className="flex justify-center">
                <div
                    className="
          lg:grid 
          lg:grid-cols-4 
          lg:w-[960px] 
          lg:ml-0
          lg:mr-0
          lg:p-[80px]
          rounded-xl 
          mt-[100px] 
          bg-dayliezPurple 
          p-[40px] 
          ml-5
          mr-5
          mx-auto 
          font-outfit 
          antialiased 
          text-white
          "
                >
                    <div className="lg:col-span-3">
                        <h2 className="text-[48px] font-semibold leading-10">
                            Join our beta program now
                        </h2>
                        <div className="text-[24px] pt-4">
                            Take a step to get your agile right!
                        </div>
                    </div>
                    <div className="lg:col-span-1 place-self-center pt-4 lg:pt-0">
                        <CTAButton size="large" />
                    </div>
                </div>
            </div>
        </ContentComponent>
    );
};
