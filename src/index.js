
import express from "express";
import inglesRouter from "../src/routes/ingles.route.js";

const app = express()

app.use(express.json())
app.use('/api', inglesRouter)

const PORT = 3000



app.listen(PORT, ()=>{
    console.log('SERVER CORRIENDO DE IDIOMAS ');
    
})