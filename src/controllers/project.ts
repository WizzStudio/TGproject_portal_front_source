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

/*获取首页数据*/
const homeProjHandler = (req,res)=>{
    res.render('home',tempData)
}

/**/


export {
    homeProjHandler
}