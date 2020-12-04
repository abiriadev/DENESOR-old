"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// module.exports = Command
var Command = /** @class */ (function () {
    function Command(
    // this: any,
    _a) {
        var condition = _a.condition, action = _a.action, _b = _a.description, description = _b === void 0 ? ". . ." : _b;
        this.condition = condition;
        this.action = action;
        this.description = description;
    }
    return Command;
}());
exports.default = Command;
