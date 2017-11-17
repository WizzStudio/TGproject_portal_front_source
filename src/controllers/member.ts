import CUtil from '../utils/Utils'
import {getAllMember, getMemberById} from '../request/apis'


/*部门简介页面 获取全部用户*/
const allMemberHandler = (req,res)=>{
    let _renderData = {
        active:'department',
        groups:{
            product:[],
            develop:[],
            design:[]
        }
    }

    getAllMember()
        .then((data)=>{
            console.log(data)
            res.render('/department',_renderData)
        })
        .catch((err)=>{
            CUtil.errorHandle(err,res)
        })
}


export {allMemberHandler}