const express = require('express');
const path = require('path');
const app = express();



const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


app.listen(3000, () => {
    console.log("Servidor corriendo")
});

app.get("/", (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(__dirname + "/views/home.html")
 // Permite enviar un archivo HTML
});

app.get("/register", function(req,res){
    res.sendFile(__dirname + "/views/register.html")

});
