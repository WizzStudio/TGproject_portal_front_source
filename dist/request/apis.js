"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("./fetch");
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
    return fetch_1.default('get', `/TGProject/project/${id}`, {}, {});
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
//# sourceMappingURL=apis.js.map