import  fetch from './fetch'

/**
 *
 * @param id
 * @returns {any}
 */
const getMemberById=(id)=>{
    return fetch('get',`/TGProject/employeeId/${id}`,{},{})
}



export {
    getMemberById,
}