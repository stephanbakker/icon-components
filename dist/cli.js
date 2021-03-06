#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rimraf_1 = __importDefault(require("rimraf"));
const get_1 = require("./get");
const build_1 = require("./build");
const list_1 = require("./list");
const settings_1 = require("./settings");
const clog = __importStar(require("cli-block"));
// If remove old is set, the destination folder will be removed in order to be sure all files are new.
() => {
    if (settings_1.settings().removeOld)
        rimraf_1.default(settings_1.settings().dest + '/*', () => {
            console.log('Cleaned destination folder');
        });
};
get_1.getFiles(settings_1.settings())
    .then(build_1.buildFiles)
    .then(list_1.createLists)
    .then(() => {
    clog.BLOCK_END('Done!');
});
// console.log(tempSettings);
// getFiles(settings()).then(getTemplates).then(buildFiles);
// .then(createLists);
//# sourceMappingURL=cli.js.map