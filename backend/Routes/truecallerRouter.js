const {createData,readData,updateData,deleteData} = require('../Controllers/truecallerController')
const express = require('express');

let trueCallerRrouter = express.Router();

trueCallerRrouter.post("/create",createData);
trueCallerRrouter.get('/',readData);
trueCallerRrouter.put('/update',updateData);
trueCallerRrouter.delete('/delete:id',deleteData);

module.exports = trueCallerRrouter;