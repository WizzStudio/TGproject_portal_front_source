"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    emailAddress: { type: String, unique: true },
    gender: { type: Number, default: 1 },
    avatar: { type: String, default: 'https://camo.githubusercontent.com/a43de8ca816e78b1c2666f7696f449b2eeddbeca/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667' },
    regTime: { type: Number, default: +new Date() },
    group: { type: String, enum: ["PM", "DEV", "UI", "UNASSIGNED"], default: "UNASSIGNED" },
    message: { type: String, default: 'there is no message' },
    nowProject: { type: String, default: 'no project' },
    progress: { type: Number, default: 50 }
}, { timestamps: true, versionKey: false });
/*user:{
 id:number,
 name:string,
 password:hashString,
 emailAdress:string,
 gender:0|1,
 avatar:string
 }*/
var User = mongoose.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map