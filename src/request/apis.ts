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


export {
    getMemberById,
    getMemberByName,
    getAllMember
}