const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname +'/public'));  

app.listen(3000, () => {
    console.log("Servidor corriendo")
});

app.get("/", (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    let pathHTML =path.join(__dirname , "/views/home.html")
    res.sendFile(pathHTML) // Permite enviar un archivo HTML
});


