import { createdatabaseconnection } from "../config/orderdb.js";
const connection=createdatabaseconnection();
export function addorder(request,response){
    try {
    const orderInfo=request.body;
    const insertitemqry=`INSERT into orders(order_type,genre,Quantity) values('${orderInfo.order_type}','${orderInfo.genre}','${orderInfo.Quantity}')`;
    connection.query(insertitemqry,(error)=>{
        if(error){
            console.log(error);
            response.status(500).send({message:"failed  to add order!"});
        }else{
            response.status(201).send({message:"Order added successfuly!!"});
        }
    })     
    } catch (error) {
        response.status(500).send({message:"failed to fetch Order database!!"});
    }    
}
export function removeorder(request,response){
    try {
    const orderInfo=request.body;
    const insertitemqry=`DELETE from orders where order_ID=('${orderInfo.order_ID}')`;
    connection.query(insertitemqry,(error)=>{
        if(error){
            
            response.status(500).send({message:"failed  to remove order!!"});
        }else{
            response.status(201).send({message:"Order removed successfuly!!"});
        }
    })     
    } catch (error) {
        response.status(500).send({message:"failed to fetch order database!!"});
    }    
}
export function updateOrder(request, response) {
    try {
        const { order_ID, order_type, genre, Quantity } = request.body;
        const updateItemQry = `
            UPDATE orders 
            SET order_type='${order_type}', genre='${genre}', Quantity='${Quantity}'
            WHERE order_ID='${order_ID}'
        `;

        connection.query(updateItemQry, (error) => {
            if (error) {
                console.log(error);
                response.status(500).send({ message: "Failed to update order!" });
            } else {
                response.status(200).send({ message: "Order updated successfully!" });
            }
        });
    } catch (error) {
        response.status(500).send({ message: "Failed to fetch Order database!" });
    }
}
