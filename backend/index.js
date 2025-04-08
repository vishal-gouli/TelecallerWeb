let express = require('express');
const dbconnection = require('./DB/Db');
require('dotenv').config();
let cors = require('cors');
let router = require('./Routes/authRouter');
let trueCallerRrouter = require('./Routes/truecallerRouter');

let app = express();
app.use(express.json({}));
app.use(cors());
app.use('/api',router);
app.use('/truecallerapi',trueCallerRrouter)
dbconnection();

app.get('/',(req,res)=>{
     res.send({success:true,msg:"data is retreveing form the backend"});
})

const PORT =  8000;
app.listen(PORT , ()=>{
    console.log("server is running on the port : localhost:8000");
})