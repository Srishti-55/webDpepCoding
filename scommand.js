var fs = require('fs');
function scommand(path){
    let con = [];
fs.readFile(path, 'utf8', function(err, data) {
    if (err) console.log("File not found");
    else{
    let data1 = data.split("\n");
    for(let i = 0;i<data1.length;i++){
        if(data1[i]!='\r'){
           con.push(data1[i]);
            
        }
    }
    }
    
    let d = con.join('\n');
   console.log(d);
});
}

function scommand1(files){

    for(let i =0;i<files.length;i++){
        scommand(files[i]);
    }
}

module.exports = {
    scommand: scommand1
}