"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("./fetch");
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
const getMemberById = (id) => {
    return fetch_1.default('get', `/TGProject/memberId/${id}`, {}, {});
};
exports.getMemberById = getMemberById;
/**
 * 根据姓名查询成员
 * @param name string
 * @returns {Promise<object>}
 */
const getMemberByName = (name) => {
    return fetch_1.default('get', `/TGProject/memberName/${name}`, {}, {});
};
exports.getMemberByName = getMemberByName;
/**
 * 查询所有成员
 * @returns {Promise<object>}
 */
const getAllMember = () => {
    return fetch_1.default('get', `/TGProject/members`, {}, {});
};
exports.getAllMember = getAllMember;
/**
 * 根据id查询项目
 * @param id
 * @returns {Promise<Project>}
 */
const getProjectById = (id) => {
    return fetch_1.default('get', `/TGProject/projectId/${id}`, {}, {});
};
exports.getProjectById = getProjectById;
/**
 * 根据分类查询项目
 * @param categroy
 * @returns {Promise<any>}
 */
const getProjectByCate = (categroy) => {
    return fetch_1.default('get', `/TGProject/category/${categroy}`, {}, {});
};
exports.getProjectByCate = getProjectByCate;
/**
 * 根据id查询部门
 * @param id
 * @returns {Promise<object>}
 */
const getDepartmentById = (id) => {
    return fetch_1.default('get', `/TGProject/department/${id}`, {}, {});
};
exports.getDepartmentById = getDepartmentById;
/**
 * 查询所有部门
 */
const getAllDepartment = () => {
    return fetch_1.default('get', `/TGProject/departments`, {}, {});
};
exports.getAllDepartment = getAllDepartment;
/**
 * 创建一个组员
 * @param memberInfo object
 * @returns {Promise<any>}
 */
const creatMember = (memberInfo) => {
    return fetch_1.default('post', `/TGProject/member`, {
        id: memberInfo.id,
        username: memberInfo.username,
        college: memberInfo.college,
        departmentId: memberInfo.departmentId,
        projectId: memberInfo.projectId,
        avatar: memberInfo.avatar,
        introduction: memberInfo.introduction,
        tag: memberInfo.tag,
        gender: memberInfo.gender,
        age: memberInfo.age
    }, {});
};
exports.creatMember = creatMember;
/**
 * 更新成员信息
 * @param id
 * @param memberInfo
 * @returns {Promise<any>}
 */
const updateMemberInfo = (id, memberInfo) => {
    return fetch_1.default('put', `/TGProject/memberId/${id}`, {
        id: memberInfo.id,
        username: memberInfo.username,
        college: memberInfo.college,
        departmentId: memberInfo.departmentId,
        projectId: memberInfo.projectId,
        avatar: memberInfo.avatar,
        introduction: memberInfo.introduction,
        tag: memberInfo.tag,
        gender: memberInfo.gender,
        age: memberInfo.age
    }, {});
};
exports.updateMemberInfo = updateMemberInfo;
/**
 * 删除成员
 * @param id
 * @returns {Promise<any>}
 */
const deleteMember = (id) => {
    return fetch_1.default('delete', `/TGProject/memberId/${id}`, {}, {});
};
exports.deleteMember = deleteMember;
/**
 * 新增项目
 */
const createProject = (projInfo) => {
    return fetch_1.default('post', `/TGProject/project`, {
        id: projInfo.id,
        projectName: projInfo.projectName,
        leaderId: projInfo.leaderId,
        startDate: projInfo.startDate,
        finishedDate: projInfo.startDate,
        sourceUrl: projInfo.sourceUrl,
        frontProgress: projInfo.frontProgress,
        backProgress: projInfo.backProgress,
        uiprogress: projInfo.uiProgress,
        totalProgress: projInfo.totalProgress,
        introduction: projInfo.introduction,
        picUrl: projInfo.picUrl,
        categories: projInfo.categories,
    }, {});
};
exports.createProject = createProject;
/**
 * 更新项目信息
 * @param id
 * @param projInfo
 * @returns {Promise<any>}
 */
const updateProjInfo = (id, projInfo) => {
    return fetch_1.default('put', `/TGProject/projectId/${id}`, {
        id: projInfo.id,
        projectName: projInfo.projectName,
        leaderId: projInfo.leaderId,
        startDate: projInfo.startDate,
        finishedDate: projInfo.startDate,
        sourceUrl: projInfo.sourceUrl,
        frontProgress: projInfo.frontProgress,
        backProgress: projInfo.backProgress,
        uiprogress: projInfo.uiProgress,
        totalProgress: projInfo.totalProgress,
        introduction: projInfo.introduction,
        picUrl: projInfo.picUrl,
        categories: projInfo.categories,
    }, {});
};
exports.updateProjInfo = updateProjInfo;
/**
 * 删除项目
 */
const deleteProj = (id) => {
    return fetch_1.default('delete', `/TGProject/projectId/${id}`, {}, {});
};
exports.deleteProj = deleteProj;
//# sourceMappingURL=apis.js.map