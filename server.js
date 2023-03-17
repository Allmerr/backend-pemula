const http = require("http");

const requestListener = (request, response) => {
    response.setHeader("Content-Type", "application/json");

    const { method, url } = request;

    if (url == "/") {
        if (method == "GET") {
            response.statusCode = 200;
            response.end(
                JSON.stringify({
                    message: "Ini adalah halaman home",
                })
            );
        } else {
            response.statusCode = 400;
            response.end(
                JSON.stringify({
                    message: `Halaman tidak dapat diakses melalui method ${method}`,
                })
            );
        }
    } else if (url == "/about") {
        if (method == "GET") {
            response.statusCode = 200;
            response.end(
                JSON.stringify({
                    message: "Ini adalah halaman about",
                })
            );
        } else if (method == "POST") {
            let body = [];

            request.on("data", (chuck) => {
                body.push(chuck);
            });

            request.on("end", () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);

                response.statusCode = 200;

                response.end(JSON.stringify({ message: `Halo ${name}, Ini adalah halaman about` }));
            });
        } else {
            response.statusCode = 400;

            response.end(
                JSON.stringify({
                    message: `Halaman tidak dapat diakses melalui method ${method}`,
                })
            );
        }
    } else {
        response.statusCode = 404;

        response.end(JSON.stringify({ message: "Halaman Tidak Ditemukan" }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
