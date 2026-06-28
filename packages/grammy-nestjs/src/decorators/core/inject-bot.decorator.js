"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectBot = InjectBot;
const common_1 = require("@nestjs/common");
const utils_1 = require("../../utils");
function InjectBot(botName) {
    return (0, common_1.Inject)((0, utils_1.getBotName)(botName));
}
//# sourceMappingURL=inject-bot.decorator.js.map