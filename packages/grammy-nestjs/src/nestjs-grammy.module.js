"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsGrammyModule = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
const common_1 = require("@nestjs/common");
const nestjs_grammy_module_definition_1 = require("./nestjs-grammy.module-definition");
const services_1 = require("./services");
const nestjs_grammy_constants_1 = require("./nestjs-grammy.constants");
const core_1 = require("@nestjs/core");
const utils_1 = require("./utils");
const create_bot_factory_util_1 = require("./utils/create-bot-factory.util");
const logger = new common_1.Logger('nestjs-grammy:module');
let NestjsGrammyModule = class NestjsGrammyModule extends nestjs_grammy_module_definition_1.GrammyConfigurableModuleClass {
    constructor(moduleRef) {
        super();
        this.moduleRef = moduleRef;
    }
    static forRoot(options) {
        const grammyBotName = (0, utils_1.getBotName)(options.botName);
        const grammyBotNameProvider = {
            provide: nestjs_grammy_constants_1.GRAMMY_BOT_NAME,
            useValue: grammyBotName,
        };
        const grammyBotProvider = {
            provide: grammyBotName,
            useFactory: () => (0, create_bot_factory_util_1.createBotFactory)(options),
        };
        const { providers, exports, ...rest } = super.forRoot(options);
        return {
            providers: [
                ...(providers ?? []),
                grammyBotNameProvider,
                grammyBotProvider,
            ],
            exports: [...(exports ?? []), grammyBotNameProvider, grammyBotProvider],
            ...rest,
        };
    }
    static forRootAsync(options) {
        const grammyBotName = (0, utils_1.getBotName)(options.botName);
        const grammyBotNameProvider = {
            provide: nestjs_grammy_constants_1.GRAMMY_BOT_NAME,
            useValue: grammyBotName,
        };
        const grammyBotProvider = {
            provide: grammyBotName,
            useFactory: (options) => (0, create_bot_factory_util_1.createBotFactory)(options),
            inject: [nestjs_grammy_module_definition_1.GRAMMY_MODULE_OPTIONS],
        };
        const { providers, exports, ...rest } = super.forRootAsync(options);
        return {
            providers: [
                ...(providers ?? []),
                grammyBotNameProvider,
                grammyBotProvider,
            ],
            exports: [...(exports ?? []), grammyBotNameProvider, grammyBotProvider],
            ...rest,
        };
    }
    async onApplicationShutdown() {
        const botName = this.moduleRef.get(nestjs_grammy_constants_1.GRAMMY_BOT_NAME);
        logger.debug(`GrammyCoreModule: ${botName} shutting down`);
        const bot = this.moduleRef.get(botName);
        await bot?.stop();
    }
};
exports.NestjsGrammyModule = NestjsGrammyModule;
exports.NestjsGrammyModule = NestjsGrammyModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [core_1.DiscoveryModule],
        providers: [services_1.ListenersExplorerService, services_1.MetadataAccessorService],
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ModuleRef])
], NestjsGrammyModule);
//# sourceMappingURL=nestjs-grammy.module.js.map