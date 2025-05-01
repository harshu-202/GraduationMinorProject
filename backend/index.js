import express from 'express';
import cors from 'cors';
import { establishconnection } from './src/config/orderdb.js';
import order_router from './src/router/order_router.js';
const api=express();
const port=3601;
api.use(cors());
api.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
api.use(express.json());
api.use("/order",order_router);
api.listen(port,()=>{
    establishconnection();
    console.log(`Server is running on 127.0.0.1:${port}` );
})