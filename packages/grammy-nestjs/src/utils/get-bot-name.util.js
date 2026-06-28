"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBotName = getBotName;
const nestjs_grammy_constants_1 = require("../nestjs-grammy.constants");
function getBotName(name) {
    return name && name !== nestjs_grammy_constants_1.DEFAULT_BOT_NAME ? `${name}Bot` : nestjs_grammy_constants_1.DEFAULT_BOT_NAME;
}
//# sourceMappingURL=get-bot-name.util.js.map