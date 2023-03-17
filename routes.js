const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "<h1>Ini halaman Home</h1>";
        },
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "<h1>Halaman tidak dapat diakses dengan method tersebut</h1>";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "<h1>Ini halaman About</h1>";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "<h1>Halaman tidak dapat diakses dengan method tersebut</h1>";
        },
    },
    {
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if (lang == "id") {
                return `<h1>Hai ${name}</h1>`;
            }

            return `<h1>Hello ${name}!</h1>`;
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "<h1>Halaman tidak ditemukan</h1>";
        },
    },
];

module.exports = routes;
