import config from './config';
import http from 'http';
import express from 'express';
//import fs from 'fs';
import apiRouter from './api';

//express js 
const server=express();

server.get('/',(req,res)=>{
	res.send("Hello Express!!");
});

//express middlewares
server.use('/api',apiRouter);
server.use(express.static('public'));


/*server.get('/about.html',(req,res)=>{
	fs.readFile('./about.html',(err,data)=>{
		res.send(data.toString());
	});
});*/

server.listen(config.port, ()=>{ 
	console.info("Express listening on port",config.port);
});

//import https from 'https';
//console.log("xooooo");

//HTTP AS SERVER
/*const server = http.createServer((req, res)=>{
	res.write("Hello Node App\n");
	setTimeout(()=>{
		res.write("Streaming data\n");
		res.end();
	},3000);
});
//run code 
server.listen(8080);*/
