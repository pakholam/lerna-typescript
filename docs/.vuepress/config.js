module.exports = {
    title: "TypeScript4 文档",
    decription: "TypeScript4 最新官方文档",
    base: "/lerna-typescript/",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    themeConfig: {
        nav: [
            {text: "首页", link: "/"},
            {
                text: "pakho的 JavaScript 博客",
                items: [
                    {text: "Github", link: "https://github.com/pakholam/learn-typescript.git"}
                ],
            },
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,
                children: [
                    {title: "学前必读", path: "/"}
                ],
            },
            {
                title: "基础学习",
                path: "/handbook/ConditionalTypes",
                collapsable: false,
                children: [
                    {title: "条件类型", path: "/handbook/ConditionalTypes"},
                    {title: "泛型", path: "/handbook/Generics"},
                ],
            },
        ],
    },
}