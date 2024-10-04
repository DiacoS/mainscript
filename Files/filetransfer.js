const fs = require('fs')
console.log("starter læsining af fil");

fs.readFile("file.txt", 'utf8',function (err, data){

    if (err) {
        return console.log(err);

    }
    console.log("filens indhold" + data)
});

console.log("vent mens filen er indlæst");
