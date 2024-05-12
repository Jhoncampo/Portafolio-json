export const actions = (router: any) => {
    return [
        {
            id: "home",
            name: "Home",
            shortcut: ["h"],
            keywords: "home index",
            perform: () => router.push("/"),
            type: "link",
            section: "navigation",
        },
        {
            id: "email",
            name: "Email",
            shortcut: ["c"],
            keywords: "email",
            perform: () => window.open("mailto:eduardcamayo13@gmail.com"),
            type: "email",
            section: "social",
        },
        {
            id: "github",
            name: "Github",
            shortcut: ["g"],
            keywords: "git github",
            perform: () =>
                window.open("https://github.com/jhoncampo", "_blank"),
            type: "github",
            section: "social",
        },
        {
            id: "instagram",
            name: "Instagram",
            shortcut: ["t"],
            keywords: "instagram tweet contact",
            perform: () =>
                window.open("https://www.instagram.com/chema___ll/", "_blank"),
            type: "instagram",
            section: "social",
        },
    ];
};
