const fs = require("fs");
const path = require("path");

const pathNote = path.resolve(__dirname, "notes.txt");
fs.readFile(pathNote, "utf-8", (err, data) => {
    if (err) {
        console.log("Gagal Membaca Data");
        return;
    }
    console.log(data);
});
