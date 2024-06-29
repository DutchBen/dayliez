import React from "react";
import * as Sentry from "@sentry/gatsby";

Sentry.init({
    dsn: "https://b40b36bde168f860d4d6e635420547f2@o4507514729070592.ingest.de.sentry.io/4507514865254480",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

interface BaseComponentProps {
    children: React.ReactNode;
    backgroundColor?: string;
    extraClass?: string;
}

export const BaseComponent = ({
    children,
    extraClass,
    backgroundColor = "bg-white",
}: BaseComponentProps) => {
    return (
        <div className={`${backgroundColor} w-screen ${extraClass}`}>
            <div className="max-w-[1496px] mx-auto">{children}</div>
        </div>
    );
};
