import  department from './Departments'

class Member{
    id:number
    name:string
    avatar:string
    intro:string
    sex:number
    age:number
    department:department
    nowProject:object
    oldProjects:object
    tags:object
}

export default Member