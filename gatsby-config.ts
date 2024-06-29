import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Dayliez",
        siteUrl: "https://www.dayliez.com",
        description: "Streamline your standups, help your team focus",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-MNMR6X2R2D", // Google Analytics / GA
                ],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Dayliez: Scrum that works",
                short_name: "Dayliez",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#FF5E20",
                display: "browser",
                icon: "src/assets/favicon.svg",
            },
        },
        {
            resolve: "@sentry/gatsby",
        },
    ],
};
export default config;
