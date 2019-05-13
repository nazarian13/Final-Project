var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});
server.listen(3000);

depredadorArr = []
destroyerArr = []
grassArr = []
grasseaterArr = []
hunterArr = []
livingcreatureArr = []
/*statistika*/



var Grass = require("./class.grass.js")
var Depredador = require("./class.depredador.js")
var Destroyer = require("./class.destroyer.js")
var Grasseater = require("./class.grasseater.js")
var Hunter = require("./class.hunter.js")
var Livingcreature = require("./class.livingcreature.js")

matrix = []

let matrix = [];
let rows = 100;
let columns = 100;

for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 20) {
            matrix[y][x] = 0;
        }
        if (a >= 20 && a < 40) {
            matrix[y][x] = 1;
        }
        else if (a >= 40 && a < 50) {
            matrix[y][x] = 2;
        }
        else if (a >= 50 && a < 70) {
            matrix[y][x] = 3;
        }
        else if (a >= 70 && a < 90) {
            matrix[y][x] = 4;
        }
        else if (a >= 90 && a < 100) {
            matrix[y][x] = 5;
        }
    }
}




setInterval(drawServerayin, 2000)
function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var l in depredadorArr) {
        depredadorArr[l].utel();
        depredadorArr[l].bazmanal();
        depredadorArr[l].mahanal();
    }
    for (var k in destroyerArr) {
        deprestroyerArr[k].utel();
        deprestroyerArr[k].bazmanal();
        deprestroyerArr[k].mahanal();
    }
    for (var m in grasseaterArr) {
        grasseaterArr[m].utel();
        grasseaterArr[m].bazmanal();
        grasseaterArr[m].mahanal();
    }
    for (var n in hunterArr) {
        hunterArr[n].utel();
        hunterArr[n].bazmanal();
        hunterArr[n].mahanal();
    }

    io.socket.emit("matrix", matrix)
}