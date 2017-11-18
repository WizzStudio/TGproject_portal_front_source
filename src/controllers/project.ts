/*有关项目的控制器*/
import {getAllMember, getMemberById} from '../request/apis'
import CUtil from '../utils/Utils'

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
            avatar:'/images/avatar2.svg',
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
            historyProjects:[
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
            avatar:'/images/avatar7.svg',
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
            historyProjects:[
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
            avatar:'/images/avatar1.svg',
            sex:1,
            department:'/images/avatar1.svg', // dev pm ui
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
            historyProjects:[
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
        },
        {
            gid:1,
            name:'游朝阳',
            avatar:'/images/avatar1.svg',
            sex:1,
            department:'/images/avatar1.svg', // dev pm ui
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
            historyProjects:[
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
        },
        {
            gid:1,
            name:'游朝阳',
            avatar:'/images/avatar1.svg',
            sex:1,
            department:'/images/avatar1.svg', // dev pm ui
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
            historyProjects:[
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
        },
        {
            gid:1,
            name:'游朝阳',
            avatar:'/images/avatar1.svg',
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
            historyProjects:[
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
        },
    ],
    design:[]
}



/*C1: 获取首页数据 */
const homeProjHandler = (req,res)=>{
    res.render('home',tempData)
}

/*C2: 分类主页面渲染 */
const cateHandler = (req,res)=>{
    res.render('categories',{active: 'categories', categories: categories})
}

/*C3: 具体分类页面渲染 */
const cateProjHandler = (req,res)=>{
    res.render('projects', {active: 'categories', cateInfo: CUtil.searchCateInfo(req.params.cate, categories),cateProjs:cateProjs})
}

/*C4: 项目详情页 */
const projHandler = (req,res)=>{
     res.render('projectInfo', {active: 'categories',cateProjs:cateProjs})
}

export {
    homeProjHandler,
    cateHandler,
    cateProjHandler,
    projHandler
}