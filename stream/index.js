const fs = require("fs");
const path = require("path");

const pathInput = path.resolve(__dirname, "input.txt");
const pathOutput = path.resolve(__dirname, "output.txt");

const writeableStream = fs.createWriteStream(pathOutput);
const readableStream = fs.createReadStream(pathInput, {
    highWaterMark: 15,
});

readableStream.on("readable", () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`);
    } catch (err) {}
});

readableStream.on("end", () => {
    writeableStream.end();
});
