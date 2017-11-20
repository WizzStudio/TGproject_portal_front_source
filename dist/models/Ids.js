"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Acery on 2017/11/1.
 */
var mongoose = require("mongoose");
var IDSchema = new mongoose.Schema({
    id: { type: Number, min: 0 },
    name: String,
});
var ID = mongoose.model("ID", IDSchema);
exports.default = ID;
//# sourceMappingURL=Ids.js.map