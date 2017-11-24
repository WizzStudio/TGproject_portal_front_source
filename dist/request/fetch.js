"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const baseURL_1 = require("../config/baseURL");
exports.default = (method = "GET", url = '', data, headers) => {
    let _url = baseURL_1.default + url;
    if (method.toUpperCase() == 'GET') {
        return new Promise((resolve, reject) => {
            request({
                url: _url,
                method: method.toUpperCase(),
                headers: headers,
            }, (err, res, body) => {
                /*注意：有err无res是请求出现错误，有res但是code!=200是请求成功但返回错误的代码*/
                if (!err && res.statusCode == 200) {
                    /*请求正常响应*/
                    // console.log(body)
                    resolve(JSON.parse(body));
                }
                else {
                    if (err && !res) {
                        /*请求未响应*/
                        reject({
                            error: err
                        });
                    }
                    else {
                        /*请求响应被拒绝*/
                        reject({
                            error: err,
                            res: res,
                            code: res.statusCode,
                        });
                    }
                }
            });
        });
    }
    if (method.toUpperCase() == 'POST') {
        return new Promise((resolve, reject) => {
            request({
                url: _url,
                method: method.toUpperCase(),
                headers: headers,
                form: data
            }, (err, res, body) => {
                /*注意：有err无res是请求出现错误，有res但是code!=200是请求成功但返回错误的代码*/
                if (!err && res.statusCode == 200) {
                    /*请求正常响应*/
                    // console.log(body)
                    resolve(JSON.parse(body));
                }
                else {
                    if (err && !res) {
                        /*请求未响应*/
                        reject({
                            error: err
                        });
                    }
                    else {
                        /*请求响应被拒绝*/
                        reject({
                            error: err,
                            res: res,
                            code: res.statusCode,
                        });
                    }
                }
            });
        });
    }
    if (method.toUpperCase() == 'DELETE') {
        return new Promise((resolve, reject) => {
            request({
                url: _url,
                method: method.toUpperCase(),
                headers: headers,
            }, (err, res, body) => {
                /*注意：有err无res是请求出现错误，有res但是code!=200是请求成功但返回错误的代码*/
                if (!err && res.statusCode == 200) {
                    /*请求正常响应*/
                    // console.log(body)
                    resolve(JSON.parse(body));
                }
                else {
                    if (err && !res) {
                        /*请求未响应*/
                        reject({
                            error: err
                        });
                    }
                    else {
                        /*请求响应被拒绝*/
                        reject({
                            error: err,
                            res: res,
                            code: res.statusCode,
                        });
                    }
                }
            });
        });
    }
    if (method.toUpperCase() == 'PUT') {
        /*使用put更新数据*/
        return new Promise((resolve, reject) => {
            request({
                url: _url,
                method: method.toUpperCase(),
                json: true,
                body: data,
                headers: headers,
            }, (err, res, body) => {
                /*注意：有err无res是请求出现错误，有res但是code!=200是请求成功但返回错误的代码*/
                if (!err && res.statusCode == 200) {
                    /*请求正常响应*/
                    // console.log(body)
                    resolve(JSON.parse(body));
                }
                else {
                    if (err && !res) {
                        /*请求未响应*/
                        reject({
                            error: err
                        });
                    }
                    else {
                        /*请求响应被拒绝*/
                        reject({
                            error: err,
                            res: res,
                            code: res.statusCode,
                        });
                    }
                }
            });
        });
    }
};
//# sourceMappingURL=fetch.js.map