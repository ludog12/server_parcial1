const express = require("express")

const app = express();

app.use(express.json())
app.use(require("./src/routes/home.routes"))


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


const port = 4000;
app.listen(port, ()=>{console.log(`Servidor corriendo en el puerto ${port}`)})

