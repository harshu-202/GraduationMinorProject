import { createConnection } from "mysql2";
export function createdatabaseconnection(){
    const myconnection=createConnection({
        host:'localhost',
        user:'root',
        password:'cdac',
        database:'web'
    })
    return myconnection;
}
export function establishconnection(){
    const myconnection=createdatabaseconnection();
    myconnection.connect((error)=>{
        if(error){
            console.log("failed to connect");
        }else{
            console.log("connected to database");
        }
        })
}