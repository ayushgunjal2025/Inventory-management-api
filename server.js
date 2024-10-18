const express= require('express');
const cors=require('cors')
const dbConnect=require('./config/database');
const app=express();

require('dotenv').config();
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


const allRoutes = require('./routes/routes');
app.use("/api/v1",allRoutes);

app.listen(PORT,()=>{
    console.log(`app running at port ${PORT}`);
})

dbConnect();