const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

console.log('HELLO BACKED')
console.log('WORKING ON THE SURFACE')

router.get("/", (req, res) => {
    res.send("App is running..");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
