//Server
const express = require('express');
const server = express();


const { pageLanding, pageStudy, pageGiveClasses, saveClasses } =require('./pages')


//  nunjucks configuration (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// server start and configuration
server
// recieve data from body
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
// server starter
    .listen(5500);
