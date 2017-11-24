import  fetch from './fetch'

// const apiFactory=()=>{
//
//     return function () {
//
//     }
// }

/**
 * 通过id查询成员
 * @param id
 * @returns {Promise<object>}
 */
const getMemberById=(id)=>{
    return fetch('get',`/TGProject/memberId/${id}`,{},{})
}

/**
 * 根据姓名查询成员
 * @param name string
 * @returns {Promise<object>}
 */
const getMemberByName=(name)=>{
    return fetch('get',`/TGProject/memberName/${name}`,{},{})
}

/**
 * 查询所有成员
 * @returns {Promise<object>}
 */
const getAllMember = ()=>{
    return fetch('get',`/TGProject/members`,{},{})
}

/**
 * 根据id查询项目
 * @param id
 * @returns {Promise<Project>}
 */
const getProjectById = (id)=>{
    return fetch('get',`/TGProject/projectId/${id}`,{},{})
}

/**
 * 根据分类查询项目
 * @param categroy
 * @returns {Promise<any>}
 */
const getProjectByCate = (categroy)=>{
    return fetch('get',`/TGProject/category/${categroy}`,{},{})
}


/**
 * 根据id查询部门
 * @param id
 * @returns {Promise<object>}
 */
const  getDepartmentById= (id)=>{
    return fetch('get',`/TGProject/department/${id}`,{},{})
}

/**
 * 查询所有部门
 */
const  getAllDepartment = ()=>{
    return fetch('get',`/TGProject/departments`,{},{})
}


/**
 * 创建一个组员
 * @param memberInfo object
 * @returns {Promise<any>}
 */
const  creatMember = (memberInfo)=>{
    return fetch('post',`/TGProject/member`,{
        id:memberInfo.id,
        username:memberInfo.username,
        college:memberInfo.college,
        departmentId:memberInfo.departmentId,
        projectId:memberInfo.projectId,
        avatar:memberInfo.avatar,
        introduction:memberInfo.introduction,
        tag:memberInfo.tag,
        gender:memberInfo.gender,
        age:memberInfo.age
    },{})
}

/**
 * 更新成员信息
 * @param id
 * @param memberInfo
 * @returns {Promise<any>}
 */
const  updateMemberInfo = (id,memberInfo)=>{
    return fetch('put',`/TGProject/memberId/${id}`,{
        id:memberInfo.id,
        username:memberInfo.username,
        college:memberInfo.college,
        departmentId:memberInfo.departmentId,
        projectId:memberInfo.projectId,
        avatar:memberInfo.avatar,
        introduction:memberInfo.introduction,
        tag:memberInfo.tag,
        gender:memberInfo.gender,
        age:memberInfo.age
    },{})
}

/**
 * 删除成员
 * @param id
 * @returns {Promise<any>}
 */
const  deleteMember = (id)=>{
    return fetch('delete',`/TGProject/memberId/${id}`,{},{})
}

/**
 * 新增项目
 */
const  createProject = (projInfo)=>{
    return fetch('post',`/TGProject/project`,{
        id:projInfo.id,
        projectName:projInfo.projectName,
        leaderId:projInfo.leaderId,
        startDate:projInfo.startDate,
        finishedDate:projInfo.startDate,
        sourceUrl:projInfo.sourceUrl,
        frontProgress:projInfo.frontProgress,
        backProgress:projInfo.backProgress,
        uiprogress:projInfo.uiProgress,
        totalProgress:projInfo.totalProgress,
        introduction:projInfo.introduction,
        picUrl:projInfo.picUrl,
        categories:projInfo.categories,
    },{})
}

/**
 * 更新项目信息
 * @param id
 * @param projInfo
 * @returns {Promise<any>}
 */
const   updateProjInfo= (id,projInfo)=>{
    return fetch('put',`/TGProject/projectId/${id}`,{
        id:projInfo.id,
        projectName:projInfo.projectName,
        leaderId:projInfo.leaderId,
        startDate:projInfo.startDate,
        finishedDate:projInfo.startDate,
        sourceUrl:projInfo.sourceUrl,
        frontProgress:projInfo.frontProgress,
        backProgress:projInfo.backProgress,
        uiprogress:projInfo.uiProgress,
        totalProgress:projInfo.totalProgress,
        introduction:projInfo.introduction,
        picUrl:projInfo.picUrl,
        categories:projInfo.categories,
    },{})
}


/**
 * 删除项目
 */
const   deleteProj= (id)=>{
    return fetch('delete',`/TGProject/projectId/${id}`,{},{})
}

// const   = ()=>{
//     return fetch('get',``,{},{})
// }



export {
    getMemberById,
    getMemberByName,
    getAllMember,
    getProjectById,
    getProjectByCate,
    getAllDepartment,
    getDepartmentById,
    creatMember,
    createProject,
    updateMemberInfo,
    updateProjInfo,
    deleteProj,
    deleteMember
}