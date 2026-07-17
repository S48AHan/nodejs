
 const fs =  require("fs");
 fs.writeFile("output.txt","Writing File",(e)=>{
    if(e) console.log("Error!")
    else console.log("File written Successfully")
 })