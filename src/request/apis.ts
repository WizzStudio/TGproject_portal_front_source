import  fetch from './fetch'

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
    return fetch('get',`/TGProject/project/${id}`,{},{})
}

const getProjectByCate = (categroy)=>{
    return fetch('get',`/TGProject/category/${categroy}`,{},{})
}

export {
    getMemberById,
    getMemberByName,
    getAllMember,
    getProjectById,
    getProjectByCate
}