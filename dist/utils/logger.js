"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("colors");
colors.setTheme({
    error: "#b3211c",
    info: "#35bd78",
    data: "#106fb3",
    debug: "#db5606" // 调试用debug
});
console.log('this is an error'.error);
function error(cont, data) {
    console.log(cont.error);
}
exports.error = error;
//# sourceMappingURL=logger.js.map