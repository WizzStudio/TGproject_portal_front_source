"use strict";
/**
 * EventEmitter类存储事件和事件触发器
 * @constructor
 */
Object.defineProperty(exports, "__esModule", { value: true });
function EventEmitter() {
    this.events = {}; // 多次事件
    this.onceEvents = {}; // 一次事件
}
/**
 * 绑定多次事件
 * @param {string} eventName 事件名称
 * @param {function} callback 回调函数
 */
EventEmitter.prototype.on = function (eventName, callback) {
    this.events[eventName] = this.events[eventName] || []; // **
    this.events[eventName].push(callback);
}; // 绑定事件
/**
 * 绑定单次事件
 * @param {string} eventName 事件名称
 * @param {function} callback 回调函数
 */
EventEmitter.prototype.once = function (eventName, callback) {
    this.on(eventName, callback);
    this.onceEvents[eventName] = true;
}; // 绑定一次事件
/**
 * 事件触发(发射器) 发射出的事件将会触发对应的 on,once 绑定的回调函数
 * @param {string} eventName 绑定的事件名
 * @param {any} _ 给事件传入的数据
 */
EventEmitter.prototype.emit = function (eventName, _) {
    var events = this.events[eventName], args = Array.prototype.slice.call(arguments, 1), i, m;
    if (!events) {
        return;
    }
    for (i = 0, m = events.length; i < m; i++) {
        events[i].apply(null, args);
    }
    if (this.onceEvents[eventName]) {
        delete this.events[eventName];
        delete this.onceEvents[eventName];
    }
}; // 发射事件
// 作为一个组件导入
exports.default = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map