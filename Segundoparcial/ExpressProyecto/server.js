const { request } = require("express");

const express = requiere('express')

const app = express();

app.use(express.json());

const PORT = 4000;

// tenemos ruta principal pior medio del metodo fer 

app.get('/saludo', (request, res) => {

        res.json({mensaje: 'Ola es una prueba  en GET'});
});

//rutas por medio de posr poe medio de un endpoint propio

app,post('/eco', (request, res)=>{
const {texto} = request.body;
if(!texto){
    return res.status(400).json({error : 'El texto es obliatorio'});
}
    res.status(201).json({eco:texto})
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})