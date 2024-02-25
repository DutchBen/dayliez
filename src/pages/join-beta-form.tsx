// Step 1: Import React
import React, { useState } from "react";

import { LayoutComponent, ContentComponent, Footer } from "../components";

// Step 2: Define your component
const IndexPage = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState<boolean>(false);

    return (
        <LayoutComponent>
            <ContentComponent>
                <div className="flex flex-col items-center p-[40px] lg:p-[80px] mx-auto font-outfit antialiased text-black">
                    <h1 className="text-[63px] leading-[63px] font-semibold tracking-tighter">
                        Join our beta program!
                    </h1>
                    <h2 className="text-[26px] leading-[36px]  text-gray-500 w-fit lg:w-[635px] p-5">
                        We are always looking for companies to join our beta
                        program. It's free. Contact us to get a
                        product demo and let's have a chat.
                    </h2>
                    <div className="flex flex-col justify-center items-center font-outfit w-full max-w-[450px]">
                        {(formIsSubmitted && (
                            <div className="p-4 bg-green-500 text-white rounded-lg w-fit">
                                Thank you for your interest. We will get in
                                touch with you soon!
                            </div>
                        )) || (
                            <form
                                className="grid grid-rows-layout grid-cols-full gap-4 w-full lg:w-[540px]"
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    const formData = new FormData(
                                        e.currentTarget
                                    );
                                    const dataToSend = {
                                        name: formData.get("name"),
                                        email: formData.get("email"),
                                        message: formData.get("message"),
                                    };

                                    fetch("https://submit-form.com/NUHnqH6kK", {
                                        method: "POST",
                                        body: JSON.stringify(dataToSend),
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    }).catch(() => {
                                        console.log(
                                            "We catch an error but the form submits just fine"
                                        );
                                    });
                                    setFormIsSubmitted(true);
                                }}
                            >
                                <div className="grid lg:grid-flow-col grid-flow-ro w-full gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="appearance-none inline-block lg:w-full leading-normal outline-none border-none p-4 rounded-lg font-medium text-base bg-gray-200 text-black shadow-inner"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="appearance-none inline-block w-full leading-normal outline-none border-none p-4 rounded-lg font-medium text-base bg-gray-200 text-black shadow-inner"
                                    />
                                </div>
                                <textarea
                                    placeholder="Please contact me to schedule a demo and possibly let me join your beta program"
                                    name="message"
                                    className="appearance-none inline-block w-full h-[150px] leading-normal outline-none border-none min-h-0 p-4 resize-y rounded-lg bg-gray-200 font-inter font-medium text-base text-black shadow-inner"
                                    defaultValue="Please contact me to schedule a demo and me join your beta program"
                                />
                                <div>
                                    <input
                                        type="submit"
                                        className="appearance-none inline-block w-full leading-normal outline-none border-none rounded-lg p-4 font-semibold text-base bg-gray-900 cursor-pointer text-white z-10"
                                        value="Send"
                                    />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </ContentComponent>
            <Footer />
        </LayoutComponent>
    );
};

export const Head = () => <title>Dayliez: Scrum that works</title>;

export default IndexPage;
