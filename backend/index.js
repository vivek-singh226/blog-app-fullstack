const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors =require  ('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter')

require('dotenv').config();
require('./Models/data');
const PORT = process.env.PORT || 8080;

app.get('/ping',(req, res) =>{
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})





// jwt token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdmVrQGdtYWlsLmNvbSIsIl9pZCI6IjY3MDk3NzZlYjNhYTBhMjFjNTVlZTU1ZiIsImlhdCI6MTcyODczNTYyOCwiZXhwIjoxNzI4ODIyMDI4fQ.96HFaR2p0kkDGaXbvY7RAmdgjdtEqu31gP1e5SMwkG8