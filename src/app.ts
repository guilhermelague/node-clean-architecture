import Constants from "./infrastructure/configuration/consts.ts";
import express from "express";
import loaders from "./loaders.ts";
import cors from 'cors'
import NetAddress from "./utils/net_address.js";

async function startServer() {
  const app = express();
  
  app.use(cors());

  app.use((req, res, next) => {
    req.header('Access-Control-Allow-Headers');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });

  await loaders(app);

  app.listen(Constants.server.port, async () => {
    const ip = NetAddress.getIP();
    console.log(`🛡️  Server listening on port: ${Constants.server.port} 🛡️`);
    console.log(`🛡️  ${ip} 🛡️`);
    console.log(`🛡️  Base URL: http://${ip.split(': ')[1]}:${Constants.server.port} 🛡️`);
    console.log(`🛡️  Database in use: ${Constants.mySqlDataBase.name} 🛡️`);
    // console.log(`🛡️  Bucket in use: ${Constants.googleCloudBucket.name} 🛡️`);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });
}

startServer();