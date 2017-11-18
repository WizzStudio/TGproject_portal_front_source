import CUtil from '../utils/Utils'
import {getAllMember, getMemberById} from '../request/apis'


/* C1: 部门简介页面 获取全部用户*/
const allMemberHandler = (req, res) => {
    let _renderData = {
        active: 'department', // header的active
        groups: {
            product: [],
            develop: [],
            design: []
        }, // 人员渲染数据
        memberCount: 0
    }
    let _memberInfo = {
        id: 0,
        name: '',
        avatar: '',
        intro: '',
        tags: [],
        sex:0,
        age:0
    }

    /*获取全部成员接口*/
    getAllMember()
        .then((data) => {
            // console.log(data.length)
            _renderData.memberCount = data.length
            for (let item of data) {
                /*数据绑定
                * 1:技术 2：ui 3：产品 4：运营*/
                _memberInfo.id = item.id
                _memberInfo.name = item.username
                _memberInfo.avatar = item.avatar
                _memberInfo.intro = item.introduction
                _memberInfo.sex = item.gender
                _memberInfo.age = item.age

                /*判断分别渲染*/
                for (let tag of JSON.parse(item.tag)) {
                    _memberInfo.tags.push(tag)
                }
                if (item.departmentId == 1) {
                    _renderData.groups.develop.push(_memberInfo)
                }
                if (item.departmentId == 2) {
                    _renderData.groups.design.push(_memberInfo)
                }
                if (item.departmentId == 3 || item.departmentId == 4) {
                    _renderData.groups.product.push(_memberInfo)
                }

                /*清空数据*/
                _memberInfo = {
                    id: 0,
                    name: '',
                    avatar: '',
                    intro: '',
                    tags: [],
                    sex:0,
                    age:0
                }
            }

            res.render('department', _renderData)
        })
        .catch((err) => {
            CUtil.errorHandle(err, res)
        })
}


export {allMemberHandler}