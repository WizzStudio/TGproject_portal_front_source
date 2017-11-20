"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Acery on 2017/10/29.
 */
var User_1 = require("../models/User");
var Ids_1 = require("../models/Ids");
var request = require("express-validator");
exports.postLogin = function (req, res, next) {
    req.assert('email', 'email is valid').isEmail();
    // req.assert('password','passowrd not empty').isEmpty();
    var errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/login');
    }
    User_1.default.findOne({ emailAddress: req.body.email }, function (err, user) {
        if (err) {
            req.flash('errors', { msg: err._message });
            return res.redirect('/login');
        }
        if (!user) {
            req.flash('errors', { msg: "the user is not exist" });
            return res.redirect('/login');
        }
        if (user.password == req.body.password) {
            req.session.userInfo = user;
            res.redirect('/homepage');
        }
        else {
            req.flash('errors', { msg: "wrong password" });
            return res.redirect('/login');
        }
    });
    // req.assert("username", "Email is not valid").isEmail();
    // // req.assert("password",)
    // // req.session.name=req.body.username;
    // const errors = req.validationErrors();
    // console.log(errors)
    // if (errors) {
    //     req.flash("errors", errors); // errors 被包装进messages里
    //     return res.redirect("/");
    // }
    // const user = new User({
    //     emailAddress: req.body.username,
    //     password: req.body.password,
    //     id: 1,
    //     name: 'default',
    //
    // });
    // user.save((d1,d2)=>{
    // })
    // res.end("ok")
};
exports.postRegister = function (req, res, next) {
    /*验证字段*/
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('username', 'Username is not valid,length must be 4~16').isLength({ min: 4, max: 16 });
    req.assert('rePassword', 'password not the same').equals(req.body.password);
    var errors = req.validationErrors();
    /*如果上述验证不通过，结果会被赋给errors*/
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/register');
    }
    // id.findAndModify({update:{$inc:{'id':1}}, query:{"name":"user"}});
    /*根据Email查找是否已经被注册过了*/
    User_1.default.findOne({ 'emailAddress': req.body.email }, function (err, existUser) {
        if (err) {
            return next(err);
        }
        if (existUser) {
            req.flash("errors", { msg: "email has been registered" });
            return res.redirect('/register');
        }
        /*找出id并做自增*/
        Ids_1.default.findOne({ 'name': 'user' }, 'id', function (err, ID) {
            if (err)
                next(err);
            var newId = ID.id + 1;
            var usr = new User_1.default({
                id: newId,
                name: req.body.username,
                password: req.body.password,
                emailAddress: req.body.email
            });
            /*更新Id（主码id自增）*/
            Ids_1.default.update({ 'name': 'user' }, { id: newId }, function (err) {
                if (err)
                    next(err);
                usr.save(function (err) {
                    if (err)
                        next(err);
                    else {
                        req.flash('info', { msg: "register successfully!" });
                        return res.redirect('/login');
                    }
                });
            });
        });
    });
    // id.save((err)=>{
    //     if(err){
    //         /*Server] { ValidationError: ID validation failed: id: Path `id` (0) is less than minimum allowed value (3).
    //          [Server]   errors:
    //          [Server]    { id:
    //          [Server]       { ValidatorError: Path `id` (0) is less than minimum allowed value (3).
    //          [Server]         message: 'Path `id` (0) is less than minimum allowed value (3).',
    //          [Server]         name: 'ValidatorError',
    //          [Server]         properties: [Object],
    //          [Server]         kind: 'min',
    //          [Server]         path: 'id',
    //          [Server]         value: 0,
    //          [Server]         reason: undefined,
    //          [Server]         '$isValidatorError': true } },
    //          [Server]   _message: 'ID validation failed',
    //          [Server]   name: 'ValidationError' }
    //          */
    //         return res.redirect('/register');
    //
    //     }
    //     res.end('ok')
    //
    // });
    /**
     * 1.查询邮箱是否已经存在数据库
     *
     */
    // console.log(req.body);
};
//# sourceMappingURL=user.js.map