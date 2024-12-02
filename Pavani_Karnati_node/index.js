const http = require("http");
const fs = require("fs");
const path = require("path");
const {MongoClient} = require("mongodb");
const server = http.createServer(async(req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),'utf-8',(err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);                
        });
     }
    else if (req.url==='/api')
    {
        const URL = "mongodb+srv://pavanikarnati:pavani123@cluster0.ka02o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        const client = new MongoClient(URL);
        try{
            await client.connect();
            console.log("Database connected successfully");
            const cursor = client.db("student_database").collection("studentdatahub").find({});
            const results = await cursor.toArray();
            //console.log(results);
            const js= (JSON.stringify(results));
            console.log(js);
            res.setHeader("Access-Control-Allow-Origin","*");
            res.writeHead(200,{"content-type":"application/json"});
            res.end(JSON.stringify(results));
            
           
        }
        catch(err){
            console.log("Error in connecting database",err);
        }
        finally{
            await client.close();
            console.log("Database is closed");
        }
        /*fs.readFile(path.join(__dirname, 'public', 'db.json'),'utf-8',(err, content) => {
                                    
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(content);
        });
        */
    }
    else{
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end("<h1> 404 nothing is here</h1>");
    }
});

server.listen(5555,()=> console.log("Great our server is running on port 5555"));