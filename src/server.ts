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
import CUtil from './utils/Utils'

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
app.use(bodyParser.urlencoded({extended: false}));  // for application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"), {maxAge: 31557600000})); // 使用express静态转发，/js将转发到/public/js
app.use(expressValidator());


let tempData = {
    active: 'home',
    newProjects: [
        {
            pic: '/images/bg13.png',
            intro: 'Win8是Window通用平台开发平台的起点，Win8是Window通用平台开发平台的起点',
            title: '基于Win8的新一代应用平台',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'shitman',
        },
        {
            pic: '/images/bg13.png',
            intro: '人类误判心理学——21种常见心理倾向',
            title: '基于人工智能的图片识别技术',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'fuckman',
        }
    ],
    focusProjects: [
        {
            pic: '/images/bg13.png',
            intro: 'Win8是Window通用平台开发平台的起点，Win8是Window通用平台开发平台的起点',
            title: '基于Win8的新一代应用平台',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'shitman',
        },
        {
            pic: '/images/bg13.png',
            intro: 'Win8是Window通用平台开发平台的起点，Win8是Window通用平台开发平台的起点',
            title: '基于人工智能的图片识别技术',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'fuckman',
        },
        {
            pic: '/images/bg13.png',
            intro: 'Win8是Window通用平台开发平台的起点，Win8是Window通用平台开发平台的起点',
            title: '基于人工智能的图片识别技术',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'fuckman',
        },
        {
            pic: '/images/bg13.png',
            intro: 'Win8是Window通用平台开发平台的起点，Win8是Window通用平台开发平台的起点',
            title: '基于人工智能的图片识别技术',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'fuckman',
        },
        {
            pic: '/images/bg13.png',
            intro: 'Win8是Window通用平台开发平台的起点，Win8是Window通用平台开发平台的起点',
            title: '基于人工智能的图片识别技术',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'fuckman',
        },
        {
            pic: '/images/bg13.png',
            intro: 'Win8是Window通用平台开发平台的起点，Win8是Window通用平台开发平台的起点',
            title: '基于人工智能的图片识别技术',
            startTime: CUtil.ms2Date(1510558487737),
            progress: {
                front: 65,
                back: 40,
                pm: 50,
                total: 48
            },
            leader: 'fuckman',
        }
    ]
}


/**
 * express get to render configuration
 */
// app.param('id',(req,res,next,id)=>{
//     next()
// })
app.get('/', (req, res) => {
    res.render('home', tempData)
});
app.get('/broadcast', (req, res) => {
    res.render('broadcast', {active: 'broadcast'})
});
app.get('/home', (req, res) => {
    res.render('home', tempData)
});
app.get('/projects', (req, res) => {
    res.render('projects', {active: 'projects'})
});
app.get('/department', (req, res) => {
    res.render('department', {active: 'department'})
});
app.get('/contact', (req, res) => {
    res.render('contact', {active: 'contact'})
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



