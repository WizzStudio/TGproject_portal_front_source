/**
 * Created by Acery on 2017/10/27.
 */
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";
import * as path from "path";
import expressValidator = require("express-validator");

/**
 * express server
 */
const app = express();
const port = process.env.PORT || 3000;


/**
 * express global configuration
 */
app.set("views", path.join(__dirname, "../views"));  // 绑定MVC中的View层
app.set("view engine", "pug");  // 使用渲染引擎
app.use(logger("dev"));  // 使用express 自带 logger -Morgan /*dev common combined short tiny*/
app.use(bodyParser.json());  // 处理http请求body里的application/json数据
app.use(bodyParser.urlencoded({ extended: false }));  // for application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })); // 使用express静态转发，/js将转发到/public/js
app.use(expressValidator());




/**
 * express get to render configuration
 */
// app.param('id',(req,res,next,id)=>{
//     next()
// })
app.get('/', (req, res) => {
    res.render('broadcast',{active:'broadcast'})
});
app.get('/broadcast', (req, res) => {
    res.render('broadcast',{active:'broadcast'})
});
app.get('/home', (req, res) => {
    res.render('home',{active:'home'})
});
app.get('/projects', (req, res) => {
    res.render('projects',{active:'projects'})
});
app.get('/department', (req, res) => {
    res.render('department',{active:'department'})
});
app.get('/contact', (req, res) => {
    res.render('contact',{active:'contact'})
});
// app.get('/test/:id', (req, res) => {
//     res.render('home')
// });




/**
 * 404 not found page
 */
app.get('*', (req, res) => {
    // res.end('fucking error');
    res.render('notFound')
}); // 404处理


/*error handle*/
app.use(errorHandler());

/**
 * start server port
 */
app.listen(port, () => {
    console.log(`server listen at ${port}`);
});



