"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBotFactory = createBotFactory;
const grammy_1 = require("grammy");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('nestjs-grammy:create-bot-factory.util');
async function createBotFactory(moduleOptions) {
    const bot = new grammy_1.Bot(moduleOptions.token, moduleOptions.options);
    if (moduleOptions.middlewares) {
        bot.use(...moduleOptions.middlewares);
    }
    if (!bot.isInited()) {
        await bot.init();
        logger.debug(`To optimize (for example):`);
        logger.debug(`export BOT_INFO='${JSON.stringify(bot.botInfo)}'`);
        logger.debug(`(and in forRoot():)`);
        logger.debug(`options: {botInfo: JSON.parse(process.env.BOT_INFO)},`);
    }
    else {
        logger.debug(`bot.isInited() is true`);
    }
    logger.debug(`createBotFactory creating bot: `, moduleOptions.botName);
    return bot;
}
//# sourceMappingURL=create-bot-factory.util.js.map