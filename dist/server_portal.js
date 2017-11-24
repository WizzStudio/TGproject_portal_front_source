"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Acery on 2017/10/27.
 */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const path = require("path");
const expressValidator = require("express-validator");
/**
 * express server
 */
const app = express();
const port = process.env.PORT || 3000;
/**
 * express global configuration
 */
app.set("views", path.join(__dirname, "../views")); // 绑定MVC中的View层
app.set("view engine", "pug"); // 使用渲染引擎
app.use(logger("dev")); // 使用express 自带 logger -Morgan /*dev common combined short tiny*/
app.use(bodyParser.json()); // 处理http请求body里的application/json数据
app.use(bodyParser.urlencoded({ extended: false })); // for application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })); // 使用express静态转发，/js将转发到/public/js
app.use(expressValidator());
/* controller*/
const projectController = require("./controllers/project");
const memberController = require("./controllers/member");
const manageController = require("./controllers/managment");
/**
 * express get to render configuration
 */
app.get('/', projectController.homeProjHandler);
app.get('/broadcast', (req, res) => {
    res.render('broadcast', { active: 'broadcast' });
});
app.get('/home', projectController.homeProjHandler);
app.get('/categories', projectController.cateHandler);
app.get('/department', memberController.allMemberHandler);
app.get('/management', manageController.managePageHandler);
app.get('/contact', (req, res) => { res.render('contact', { active: 'contact' }); });
/* query by especial id*/
app.get('/categories/:cate', projectController.cateProjHandler);
app.get('/project/:id', projectController.projHandler);
/*testapi*/
app.get('/testapi', (req, res) => {
    res.render('management');
});
/**
 * 404 not found page
 */
app.get('*', (req, res) => {
    // res.end('fucking error');
    res.render('notFound');
}); // 404处理
/*error handle*/
app.use(errorHandler());
/**
 * start server port
 */
app.listen(port, () => {
    console.log(`server listen at ${port}`);
});
//# sourceMappingURL=server_portal.js.map