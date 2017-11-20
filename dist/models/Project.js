"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Acery on 2017/10/28.
 */
var mongoose = require("mongoose");
var projectSchema = new mongoose.Schema({
    name: String,
    id: { type: Number, unique: true },
    startTime: Number,
    endTime: Number,
    reward: Number,
    pics: Array,
    process: {
        type: Number,
        enum: [0, 1, 2, 3, 4]
    },
    intro: String,
    require: [
        {
            name: String,
            cont: String,
            process: {
                type: Number,
                enum: [-1, 0, 1]
            }
        }
    ],
    likeNum: {
        type: Number,
        min: 0
    },
    disLikeNum: {
        type: Number,
        min: 0
    }
}, { timestamps: true });
/*project：{
 name:string,
 id:number,
 startTime:ms,
 endTime:ms,
 reward:number,
 pic:string array,
 process:0|1|2|3|4,
 intro:string,
 require:[
 {
 name:string,
 cont:string,
 process:-1|0|1
 }
 ],
 likeNum:number,
 disLikeNum:number
 }*/ 
//# sourceMappingURL=Project.js.map