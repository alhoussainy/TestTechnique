let express= require('express');

let server= express();

let d = new Date();
let date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();

server.get('/',(request,response)=>{

    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","Content-type")
    response.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    response.setHeader("Content-type","application/json")

    if(request.method ==='OPTIONS'){
        response.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
    }
    response.status(200).json({
        "date":date
    })
})
server.listen(8080)