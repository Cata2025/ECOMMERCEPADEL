const express = require("express")
const app = express ()
const PORT = 3000
app.listen(PORT,()=> console.log ("Servidor levantado en el puerto " + PORT))

app.use("/",(req, res, next) => {
    console.log('¡Una solicitud llegó!');
   res.send("Hola Mundo")
});