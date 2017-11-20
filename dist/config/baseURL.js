"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*ENV='dev' or 'prod'*/
const env = process.env.ENV || 'dev';
let baseURL;
if (env == 'dev') {
    baseURL = 'http://47.95.253.94:8080';
}
else if (env == 'prod') {
    baseURL = '';
}
else {
    baseURL = 'error';
}
exports.default = baseURL;
//# sourceMappingURL=baseURL.js.map