import { Router } from "express";
import { addorder, removeorder, updateOrder } from "../controller/books_order.js";

const order_router=Router();
order_router.post("/addorder",addorder);
order_router.post("/removeorder",removeorder);
order_router.put("/updateOrder",updateOrder);
export default order_router;