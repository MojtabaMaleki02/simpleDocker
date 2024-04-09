const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("I am learning and this feels good!"); 
 });

app.listen(8000, function () {
    console.log("app listening on port 8000");
});
