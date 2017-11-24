"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 该控制器用于控制后台管理页面 */
/* C1: 管理页面控制器 */
const managePageHandler = (req, res) => {
    /*1. 登录拦截
    * 2. 如果登录跳转*/
    res.render('management', { active: 'manage' });
};
exports.managePageHandler = managePageHandler;
//# sourceMappingURL=managment.js.map