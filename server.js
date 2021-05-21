const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/mensaje', (req, res)=>{
    res.send('Este finde me pongo con el proyecto final 🙄');
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Servidor is up and running');
})