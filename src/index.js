"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var pathName = 'C:/Users/Administrator/Desktop/助贷产品1.74';
var dirs = [];
fs.readdir(pathName, function (err, files) {
    for (var i = 0; i < files.length; i++) {
        fs.stat(path.join(pathName, files[i]), function (err, data) {
            if (data.isFile()) {
                dirs.push(files[i]);
            }
        });
    }
    console.log(dirs);
});
