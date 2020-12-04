"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path_validation = exports.check_path = void 0;
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = __importDefault(require("path"));
var check_path = function (check_path) { return __awaiter(void 0, void 0, void 0, function () {
    var stat, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, promises_1.default.stat(check_path)];
            case 1:
                stat = _a.sent();
                return [2 /*return*/, true];
            case 2:
                err_1 = _a.sent();
                err_1.code == 'ENOENT' ? console.log("path does not exist") : console.log("ERROR CODE: " + err_1.code);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.check_path = check_path;
var certify_dir = function (last_path, target_path_split, progress, not_exist_yet) { return __awaiter(void 0, void 0, void 0, function () {
    var present_path, err_2, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                present_path = path_1.default.join(last_path, target_path_split[progress++]);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, 6, 10]);
                if (!not_exist_yet) return [3 /*break*/, 3];
                return [4 /*yield*/, check_path(present_path)];
            case 2:
                if (not_exist_yet = _b.sent())
                    return [2 /*return*/, false];
                _b.label = 3;
            case 3: return [4 /*yield*/, promises_1.default.mkdir(present_path)];
            case 4:
                _b.sent();
                return [3 /*break*/, 10];
            case 5:
                err_2 = _b.sent();
                console.error(err_2);
                return [3 /*break*/, 10];
            case 6:
                if (!(target_path_split.length > progress)) return [3 /*break*/, 8];
                return [4 /*yield*/, certify_dir(present_path, target_path_split, progress, not_exist_yet)];
            case 7:
                _a = _b.sent();
                return [3 /*break*/, 9];
            case 8:
                _a = true;
                _b.label = 9;
            case 9: return [2 /*return*/, _a];
            case 10: return [2 /*return*/];
        }
    });
}); };
var path_validation = function (target_path) { return __awaiter(void 0, void 0, void 0, function () {
    var target_path_list;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                target_path_list = path_1.default
                    .relative('.', path_1.default.normalize(target_path))
                    .split(path_1.default.sep)
                    .filter(function (p) { return !!p; });
                return [4 /*yield*/, certify_dir('.', target_path_list, 0, true)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.path_validation = path_validation;
