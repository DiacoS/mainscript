const fs = require('fs');
const data = " Hej med dig"
fs.readFile('users.json', 'utf8',function (err, data) {
    if (err) {
        return console.log(err);

    }
})
    fs.writeFile('filetest.txt', data, 'utf8', (err) => {


        if (err) {
            return console.log(err);
        }
        console.log("content of the file:" + data)
})