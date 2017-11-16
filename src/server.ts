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


/*首页数据渲染*/
let tempData = {
    active: 'home',
    newProjects: [
        {
            pid:1,
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
            pid:2,
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
            pid:1,
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
            tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
        },
        {
            pid:2,
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
            tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
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
            tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
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
            tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
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
            tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
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
            tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
        }
    ]
}

/*分类页面渲染*/
let categories = [
    {
        name: '进行中',
        picURL: '/images/material-14.png',
        pathName: 'inprogress'
    },
    {
        name: '已完成',
        picURL: '/images/material-10.png',
        pathName: 'finished'
    },
    {
        name: '精品陈列',
        picURL: '/images/material-6.png',
        pathName: 'best'
    },
    {
        name: '创意',
        picURL: '/images/material-11.png',
        pathName: 'creative'
    },
    {
        name: '微项目',
        picURL: '/images/material-16.png',
        pathName: 'tinny'
    },
    {
        name: '闲逛',
        picURL: '/images/material-3.png',
        pathName: 'hangout'
    },
]

/*分类进入二级页面渲染*/
let cateProjs = [
    {
        pid:1,
        pic: '/images/a1.png',
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
        tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
    },
    {
        pid:2,
        pic: '/images/a2.png',
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
        tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
    },
    {
        pid:3,
        pic: '/images/a3.png',
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
        tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
    },
    {
        pid:4,
        pic: '/images/a3.png',
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
        tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
    },
    {
        pid:5,
        pic: '/images/a2.png',
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
        tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
    },
    {
        pid:6,
        pic: '/images/a1.png',
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
        tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
    },
    {
        pid:7,
        pic: '/images/a4.png',
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
        tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
    },
    ]

/*具体项目内容渲染*/
let projInfo={
    pic: '/images/a4.png',
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
    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
}

/*成员介绍*/
let groups={
    product:[
        {
            gid:2,
            name:'沙砼',
            sex:1,
            department:'dev', // dev pm ui
            intro:'产品部大三, 负责TG工作室产品策划活动等 。 曾梦想一手漂亮代码走遍天下，不料半路走上了产品狗的不归路。爱好广泛，喜爱各种球类运动，喜欢美剧，电影，摄影等。对军事，国际政治，经济有挺大兴趣',
            nowProject:{
                pid:1,
                pic: '/images/a1.png',
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
                tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
            },
            historyProject:[
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                },
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                },
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                }
            ],
            tags:['单身可撩']
        },
        {
            gid:2,
            name:'高炜',
            sex:1,
            department:'dev', // dev pm ui
            intro:'TG工作室联合创始人，产品部负责人，学习产品策划一年，擅长需求分析，市场评估，有较为丰富的产品设计经验。曾担任一点研习社社群运营，瑞森客户管理系统总设计，“项慕吧”产品负责人，“flag酱”产品策划，“辰星天智”比赛平台产品设计。两次参加“互联网+”创新创业大赛，获"校一等奖"两次，“省银奖”一次。',
            nowProject:{
                pid:1,
                pic: '/images/a1.png',
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
                tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
            },
            historyProject:[
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                },
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                },
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                }
            ],
            tags:['产品策划','总设计']
        }
    ],
    develop:[
        {
            gid:1,
            name:'游朝阳',
            sex:1,
            department:'dev', // dev pm ui
            intro:'Keep It Super Simple',
            nowProject:{
                pid:1,
                pic: '/images/a1.png',
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
                tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
            },
            historyProject:[
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                },
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                },
                {
                    pid:1,
                    pic: '/images/a1.png',
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
                    tags: ['inprogress', 'finished', 'best', 'creative', 'tinny', 'hangout']
                }
            ],
            tags:['敏捷开发','只用JQuery','键盘只有Ctrl,C,V']
        }
    ],
    design:[]
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
app.get('/categories', (req, res) => {
    res.render('categories', {active: 'categories', categories: categories})
});
app.get('/categories/:cate', (req, res) => {
    res.render('projects', {active: 'categories', cateInfo: CUtil.searchCateInfo(req.params.cate, categories),cateProjs:cateProjs})
});
app.get('/project/:id', (req, res) => {
    res.render('projectInfo', {active: 'categories',cateProjs:cateProjs})
});
app.get('/department', (req, res) => {
    res.render('department', {active: 'department',groups:groups})
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



